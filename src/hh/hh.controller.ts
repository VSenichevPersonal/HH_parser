import { Controller, Get, Query, Param, UseGuards, Post, Body } from '@nestjs/common';
import { HHService } from './hh.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { VacancyCollectorService } from '../workers/vacancy-collector.service';
import type { VacancySearchParams, ResumeSearchParams } from './hh.service';

@Controller('api/hh')
export class HHController {
  constructor(
    private readonly hhService: HHService,
    private readonly vacancyCollector: VacancyCollectorService,
  ) {}

  /**
   * Поиск вакансий (публичный API)
   */
  @Get('vacancies')
  async searchVacancies(@Query() query: VacancySearchParams) {
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
   * Поиск резюме (требует авторизации)
   */
  @UseGuards(JwtAuthGuard)
  @Get('resumes')
  async searchResumes(@Query() query: ResumeSearchParams) {
    // TODO: Получить токен менеджера из запроса или авторизации
    // Пока возвращаем ошибку
    throw new Error('Resume search requires manager token');
  }

  /**
   * Получение резюме по ID (требует авторизации)
   */
  @UseGuards(JwtAuthGuard)
  @Get('resumes/:id')
  async getResume(@Param('id') id: string) {
    // TODO: Получить токен менеджера из запроса или авторизации
    throw new Error('Resume access requires manager token');
  }

  /**
   * Справочники (публичные)
   */
  @Get('areas')
  async getAreas() {
    return this.hhService.getAreas();
  }

  @Get('specializations')
  async getSpecializations() {
    return this.hhService.getSpecializations();
  }

  @Get('professional-roles')
  async getProfessionalRoles() {
    return this.hhService.getProfessionalRoles();
  }

  /**
   * Админ эндпоинт для ручного запуска сбора вакансий
   */
  @Post('admin/run-vacancy-collection')
  async runVacancyCollection(@Body() body?: { query?: string; maxPages?: number }) {
    const result = await this.vacancyCollector.collectVacanciesManual(
      body?.query,
      body?.maxPages || 1
    );

    return {
      message: 'Vacancy collection completed',
      ...result,
    };
  }
}
