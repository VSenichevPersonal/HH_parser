import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class VacancyCollectorService {
  private readonly logger = new Logger(VacancyCollectorService.name);

  async collectVacancies() {
    this.logger.log('Vacancy collection temporarily disabled for Railway testing');
    return { message: 'Vacancy collection disabled for Railway testing' };
  }

  async collectVacanciesManual(query?: string, maxPages?: number) {
    this.logger.log('Manual vacancy collection temporarily disabled for Railway testing');
    return { message: 'Manual vacancy collection disabled for Railway testing' };
  }
}
