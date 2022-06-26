import { Module } from '@nestjs/common';
import { HelloworldController } from './controllers/helloworld.controller';
import { HelloworldService } from './services/helloworld.service';

@Module({
  controllers: [HelloworldController],
  providers: [HelloworldService],
  exports: [HelloworldService],
})
export class HelloworldModule {}
