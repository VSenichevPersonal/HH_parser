import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Temporarily disabled for Railway testing
// import { AuthModule } from './auth/auth.module';
// import { HHModule } from './hh/hh.module';
// import { WorkersModule } from './workers/workers.module';
// import { VacancyModule } from './vacancies/vacancy.module';

@Module({
  imports: [], // Temporarily disabled all modules for Railway testing
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
