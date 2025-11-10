import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
// Temporarily disabled for Railway testing
// import { HHModule } from './hh/hh.module';
// import { WorkersModule } from './workers/workers.module';
// import { VacancyModule } from './vacancies/vacancy.module';

@Module({
  imports: [AuthModule], // Only AuthModule enabled for Railway testing
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
