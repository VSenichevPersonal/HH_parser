import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaClient } from '@prisma/client';
import { HHService } from '../hh/hh.service';

@Injectable()
export class VacancyCollectorService {
  private readonly logger = new Logger(VacancyCollectorService.name);
  private readonly prisma = new PrismaClient();

  constructor(private readonly hhService: HHService) {}

  /**
   * Ежечасный сбор вакансий по заданному поисковому запросу
   * Запускается каждый час в :00 минут
   */
  @Cron(CronExpression.EVERY_HOUR)
  async collectVacancies() {
    try {
      this.logger.log('🚀 Starting vacancy collection job');

      const searchQuery = process.env.TOPIC_QUERY || 'Golang';
      const maxPages = parseInt(process.env.MAX_PAGES || '5', 10);

      this.logger.log(`📋 Collecting vacancies for query: "${searchQuery}", max pages: ${maxPages}`);

      let totalCollected = 0;
      let page = 0;

      // Собираем вакансии постранично
      while (page < maxPages) {
        try {
          const result = await this.hhService.searchVacancies({
            text: searchQuery,
            per_page: 100,
            page: page,
            order_by: 'publication_time',
            date_from: this.getDateFromHoursAgo(24), // Вакансии за последние 24 часа
          });

          if (!result.items || result.items.length === 0) {
            this.logger.log(`📄 Page ${page}: No more vacancies found`);
            break;
          }

          const savedCount = await this.saveVacanciesToDb(result.items);
          totalCollected += savedCount;

          this.logger.log(`📄 Page ${page}: Collected ${savedCount} new vacancies`);

          // Если меньше 100 результатов, значит последняя страница
          if (result.items.length < 100) {
            break;
          }

          page++;

          // Небольшая пауза между страницами
          await this.delay(1000);

        } catch (error) {
          this.logger.error(`❌ Error collecting page ${page}:`, error.message);
          break;
        }
      }

      this.logger.log(`✅ Vacancy collection completed. Total new vacancies: ${totalCollected}`);

      // Обновляем статистику синхронизации
      await this.updateSyncState(searchQuery, totalCollected);

    } catch (error) {
      this.logger.error('❌ Vacancy collection failed:', error.message);
    }
  }

  /**
   * Ручной запуск сбора вакансий
   */
  async collectVacanciesManual(query?: string, maxPages = 1) {
    const searchQuery = query || process.env.TOPIC_QUERY || 'Golang';

    this.logger.log(`🔧 Manual vacancy collection started for: "${searchQuery}"`);

    let totalCollected = 0;
    let page = 0;

    while (page < maxPages) {
      try {
        const result = await this.hhService.searchVacancies({
          text: searchQuery,
          per_page: 100,
          page: page,
          order_by: 'publication_time',
        });

        if (!result.items || result.items.length === 0) {
          break;
        }

        const savedCount = await this.saveVacanciesToDb(result.items);
        totalCollected += savedCount;

        this.logger.log(`📄 Page ${page}: Collected ${savedCount} new vacancies`);

        if (result.items.length < 100) {
          break;
        }

        page++;
        await this.delay(1000);

      } catch (error) {
        this.logger.error(`❌ Error in manual collection page ${page}:`, error.message);
        break;
      }
    }

    this.logger.log(`✅ Manual collection completed. Total new vacancies: ${totalCollected}`);

    return {
      query: searchQuery,
      totalCollected,
      pagesProcessed: page + 1,
    };
  }

  /**
   * Сохранение вакансий в базу данных
   */
  private async saveVacanciesToDb(vacancies: any[]): Promise<number> {
    let savedCount = 0;

    for (const vacancy of vacancies) {
      try {
        // Сохраняем работодателя
        const employer = await this.prisma.employer.upsert({
          where: { id: BigInt(vacancy.employer.id) },
          update: { name: vacancy.employer.name },
          create: {
            id: BigInt(vacancy.employer.id),
            name: vacancy.employer.name,
          },
        });

        // Сохраняем вакансию
        const vacancyData = {
          id: BigInt(vacancy.id),
          name: vacancy.name,
          description: vacancy.snippet?.requirement || vacancy.snippet?.responsibility || vacancy.description || null,
          employerId: employer.id,
          areaId: vacancy.area?.id ? parseInt(vacancy.area.id) : null,
          publishedAt: new Date(vacancy.published_at),
          archived: vacancy.archived || false,
          url: vacancy.alternate_url,
          salaryFrom: vacancy.salary?.from ? parseFloat(vacancy.salary.from) : null,
          salaryTo: vacancy.salary?.to ? parseFloat(vacancy.salary.to) : null,
          currency: vacancy.salary?.currency || null,
          professionalRoles: vacancy.professional_roles || null,
          experience: vacancy.experience || null,
          updatedAt: new Date(vacancy.updated_at),
        };

        const savedVacancy = await this.prisma.vacancy.upsert({
          where: { id: BigInt(vacancy.id) },
          update: vacancyData,
          create: vacancyData,
        });

        // Сохраняем навыки
        if (vacancy.key_skills && vacancy.key_skills.length > 0) {
          const skillPromises = vacancy.key_skills.map(skill =>
            this.prisma.vacancySkill.upsert({
              where: {
                vacancyId_skillName: {
                  vacancyId: savedVacancy.id,
                  skillName: skill.name,
                },
              },
              update: {},
              create: {
                vacancyId: savedVacancy.id,
                skillName: skill.name,
              },
            })
          );

          await Promise.all(skillPromises);
        }

        savedCount++;

      } catch (error) {
        this.logger.error(`❌ Failed to save vacancy ${vacancy.id}:`, error.message);
      }
    }

    return savedCount;
  }

  /**
   * Обновление состояния синхронизации
   */
  private async updateSyncState(query: string, collectedCount: number) {
    try {
      await this.prisma.syncState.upsert({
        where: { source: `vacancy:${query}` },
        update: {
          lastSeen: new Date(),
        },
        create: {
          source: `vacancy:${query}`,
          lastSeen: new Date(),
          page: 0,
        },
      });
    } catch (error) {
      this.logger.error('Failed to update sync state:', error.message);
    }
  }

  /**
   * Получение даты N часов назад в формате YYYY-MM-DDTHH:mm:ss
   */
  private getDateFromHoursAgo(hours: number): string {
    const date = new Date();
    date.setHours(date.getHours() - hours);
    return date.toISOString().slice(0, 19);
  }

  /**
   * Задержка в миллисекундах
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }
}
