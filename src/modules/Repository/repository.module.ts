import { Module } from '@nestjs/common';
import { HelloWorldEntity } from './entities/helloworld.entity';

@Module({
  imports: [HelloWorldEntity],
  providers: [HelloWorldEntity],
  exports: [HelloWorldEntity],
})
export class RepositoryModule {}
