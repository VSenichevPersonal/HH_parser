import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { VacancyCollectorService } from './vacancy-collector.service';
import { HhModule } from '../hh/hh.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    HhModule,
  ],
  providers: [VacancyCollectorService],
  exports: [VacancyCollectorService],
})
export class WorkersModule {}
