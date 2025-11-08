import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { HHModule } from './hh/hh.module';

@Module({
  imports: [AuthModule, HHModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
