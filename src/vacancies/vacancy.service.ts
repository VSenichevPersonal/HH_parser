import { Injectable, Logger } from '@nestjs/common';

export interface VacancyFilters {
  page: number;
  limit: number;
  query?: string;
}

@Injectable()
export class VacancyService {
  private readonly logger = new Logger(VacancyService.name);

  async searchVacancies(filters: VacancyFilters) {
    this.logger.log('Vacancy search temporarily disabled for Railway testing');
    return {
      data: [],
      pagination: {
        page: filters.page,
        limit: filters.limit,
        total: 0,
        totalPages: 0,
      },
    };
  }

  async getVacancyById(id: string) {
    this.logger.log('Vacancy retrieval temporarily disabled for Railway testing');
    throw new Error('Vacancy service temporarily disabled for Railway testing');
  }

  async getVacancyStats() {
    this.logger.log('Vacancy stats temporarily disabled for Railway testing');
    return {
      total: 0,
      active: 0,
      topEmployers: [],
      topSkills: [],
      topAreas: [],
      salaryStats: {},
    };
  }
}
