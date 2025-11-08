import { Module } from '@nestjs/common';
import { HHService } from './hh.service';
import { HHController } from './hh.controller';

@Module({
  controllers: [HHController],
  providers: [HHService],
  exports: [HHService],
})
export class HHModule {}
