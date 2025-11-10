import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { HHModule } from './hh/hh.module';
import { WorkersModule } from './workers/workers.module';
import { VacancyModule } from './vacancies/vacancy.module';

@Module({
  imports: [AuthModule, HHModule, VacancyModule], // WorkersModule temporarily disabled
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
