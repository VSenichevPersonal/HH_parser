import { Controller, Get, Query, Param } from '@nestjs/common';
import { VacancyService } from './vacancy.service';

@Controller('api/vacancies')
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  /**
   * Получение списка вакансий из базы данных с фильтрацией
   */
  @Get()
  async getVacancies(
    @Query('page') page = '1',
    @Query('limit') limit = '20',
    @Query('query') query?: string,
    @Query('area') area?: string,
    @Query('employer') employer?: string,
    @Query('experience') experience?: string,
    @Query('salary_from') salaryFrom?: string,
    @Query('salary_to') salaryTo?: string,
  ) {
    const pageNum = parseInt(page, 10) || 1;
    const limitNum = parseInt(limit, 10) || 20;

    return this.vacancyService.searchVacancies({
      page: pageNum,
      limit: limitNum,
      query,
    });
  }

  /**
   * Получение вакансии по ID
   */
  @Get(':id')
  async getVacancy(@Param('id') id: string) {
    return this.vacancyService.getVacancyById(id);
  }

  /**
   * Получение статистики вакансий
   */
  @Get('stats/overview')
  async getVacancyStats() {
    return this.vacancyService.getVacancyStats();
  }
}
