import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { VacancyCollectorService } from './vacancy-collector.service';
import { HHModule } from '../hh/hh.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    HHModule,
  ],
  providers: [VacancyCollectorService],
  exports: [VacancyCollectorService],
})
export class WorkersModule {}
