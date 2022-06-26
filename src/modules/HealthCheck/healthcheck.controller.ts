import { Controller, Get } from '@nestjs/common';

@Controller('health-check')
export class HealthCheckContorller {
  @Get()
  healthCheck() {
    return { now: new Date() };
  }
}
