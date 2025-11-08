import { Controller, Get, Query, Param, UseGuards, Post, Body } from '@nestjs/common';
import { HHService } from './hh.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import type { VacancySearchParams, ResumeSearchParams } from './hh.service';

@Controller('api/hh')
export class HHController {
  constructor(private readonly hhService: HHService) {}

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
   * Админ эндпоинт для ручного запуска парсинга
   */
  @Post('admin/run-parsing')
  async runParsing(@Body() body: { profileId?: string; entityType: 'vacancy' | 'resume' }) {
    // TODO: Реализовать запуск парсинга
    return { message: 'Parsing started', profileId: body.profileId, entityType: body.entityType };
  }
}
