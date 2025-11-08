import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient } from '@generated/client';

export interface VacancyFilters {
  page: number;
  limit: number;
  query?: string;
  area?: number;
  employer?: string;
  experience?: string;
  salaryFrom?: number;
  salaryTo?: number;
}

@Injectable()
export class VacancyService {
  private readonly logger = new Logger(VacancyService.name);
  private readonly prisma = new PrismaClient();

  async findVacancies(filters: VacancyFilters) {
    const { page, limit, query, area, employer, experience, salaryFrom, salaryTo } = filters;
    const skip = (page - 1) * limit;

    // Строим условия фильтрации
    const where: any = {
      archived: false, // Только неархивированные вакансии
    };

    // Текстовый поиск
    if (query) {
      where.OR = [
        { name: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
        { skills: { some: { skillName: { contains: query, mode: 'insensitive' } } } },
      ];
    }

    // Фильтр по региону
    if (area) {
      where.areaId = area;
    }

    // Фильтр по работодателю
    if (employer) {
      where.employer = {
        name: { contains: employer, mode: 'insensitive' },
      };
    }

    // Фильтр по опыту работы
    if (experience) {
      where.experience = {
        path: ['id'],
        equals: experience,
      };
    }

    // Фильтр по зарплате
    if (salaryFrom || salaryTo) {
      where.OR = where.OR || [];
      const salaryConditions: any[] = [];

      if (salaryFrom) {
        salaryConditions.push({ salaryFrom: { gte: salaryFrom } });
        salaryConditions.push({ salaryTo: { gte: salaryFrom } });
      }

      if (salaryTo) {
        salaryConditions.push({ salaryFrom: { lte: salaryTo } });
        salaryConditions.push({ salaryTo: { lte: salaryTo } });
      }

      where.OR.push(...salaryConditions);
    }

    // Получаем общее количество
    const total = await this.prisma.vacancy.count({ where });

    // Получаем вакансии с пагинацией
    const vacancies = await this.prisma.vacancy.findMany({
      where,
      include: {
        employer: true,
        skills: true,
      },
      orderBy: { publishedAt: 'desc' },
      skip,
      take: limit,
    });

    return {
      data: vacancies,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findVacancyById(id: string) {
    const vacancyId = parseInt(id, 10);
    if (isNaN(vacancyId)) {
      throw new Error('Invalid vacancy ID');
    }

    const vacancy = await this.prisma.vacancy.findUnique({
      where: { id: vacancyId },
      include: {
        employer: true,
        skills: true,
      },
    });

    if (!vacancy) {
      throw new Error('Vacancy not found');
    }

    return vacancy;
  }

  async getVacancyStats() {
    // Общее количество вакансий
    const totalVacancies = await this.prisma.vacancy.count();

    // Количество активных вакансий
    const activeVacancies = await this.prisma.vacancy.count({
      where: { archived: false },
    });

    // Статистика по работодателям (топ 10)
    const topEmployers = await this.prisma.employer.findMany({
      select: {
        name: true,
        _count: {
          select: { vacancies: true },
        },
      },
      orderBy: {
        vacancies: {
          _count: 'desc',
        },
      },
      take: 10,
    });

    // Статистика по навыкам (топ 20)
    const topSkills = await this.prisma.vacancySkill.groupBy({
      by: ['skillName'],
      _count: {
        skillName: true,
      },
      orderBy: {
        _count: {
          skillName: 'desc',
        },
      },
      take: 20,
    });

    // Статистика по регионам (топ 10)
    const topAreas = await this.prisma.vacancy.groupBy({
      by: ['areaId'],
      _count: {
        areaId: true,
      },
      orderBy: {
        _count: {
          areaId: 'desc',
        },
      },
      take: 10,
    });

    // Средняя зарплата
    const salaryStats = await this.prisma.vacancy.aggregate({
      where: {
        salaryFrom: { not: null },
        archived: false,
      },
      _avg: {
        salaryFrom: true,
        salaryTo: true,
      },
      _count: {
        salaryFrom: true,
      },
    });

    return {
      total: totalVacancies,
      active: activeVacancies,
      archived: totalVacancies - activeVacancies,
      topEmployers: topEmployers.map(e => ({
        name: e.name,
        count: e._count.vacancies,
      })),
      topSkills: topSkills.map(s => ({
        name: s.skillName,
        count: s._count.skillName,
      })),
      topAreas: topAreas.map(a => ({
        areaId: a.areaId,
        count: a._count.areaId,
      })),
      salaryStats: {
        averageFrom: salaryStats._avg.salaryFrom,
        averageTo: salaryStats._avg.salaryTo,
        withSalary: salaryStats._count.salaryFrom,
      },
    };
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }
}
