import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './modules';
import configuration from './modules/config/cofiguration';
import { HealthCheckModule } from './modules/HealthCheck';

@Module({
  imports: [
    ApiModule,
    HealthCheckModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
})
export class AppModule {}
