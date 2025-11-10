import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { HHService } from './hh.service';

@Controller('api/hh')
export class HHController {
  constructor(
    private readonly hhService: HHService,
  ) {}

  /**
   * Поиск вакансий (публичный API)
   */
  @Get('vacancies')
  async searchVacancies(@Query() query: any) {
    return this.hhService.searchVacancies(query);
  }

  /**
   * Получение вакансии по ID (публичный API)
   */
  @Get('vacancies/:id')
  async getVacancy(@Param('id') id: string) {
    return this.hhService.getVacancy(id);
  }

  /**
   * Получение регионов (публичный API)
   */
  @Get('areas')
  async getAreas() {
    return this.hhService.getAreas();
  }

  /**
   * Ручной запуск сбора вакансий (админ функция) - temporarily disabled
   */
  @Post('admin/run-vacancy-collection')
  async runVacancyCollection(@Body() body: { query?: string; maxPages?: number }) {
    return { message: 'Vacancy collection temporarily disabled for Railway testing' };
  }
}
