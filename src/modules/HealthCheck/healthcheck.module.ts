import { Module } from '@nestjs/common';
import { HealthCheckContorller } from './healthcheck.controller';

@Module({
  controllers: [HealthCheckContorller],
})
export class HealthCheckModule {}
