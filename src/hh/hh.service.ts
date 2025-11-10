import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class HHService {
  private readonly logger = new Logger(HHService.name);

  async searchVacancies(params: any) {
    this.logger.log('HH API temporarily disabled for Railway testing');
    return {
      items: [],
      found: 0,
      pages: 0,
      per_page: 20,
      page: 1,
    };
  }

  async getVacancy(id: string) {
    this.logger.log('HH API temporarily disabled for Railway testing');
    throw new Error('HH API temporarily disabled for Railway testing');
  }

  async getAreas() {
    this.logger.log('HH API temporarily disabled for Railway testing');
    return [];
  }
}
