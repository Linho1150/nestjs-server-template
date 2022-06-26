import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { HelloworldModule } from './HelloWorld';
import { RepositoryModule } from './Repository';

@Module({
  imports: [
    HelloworldModule,
    RepositoryModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.user'),
        password: configService.get('database.password'),
        database: configService.get('database.name'),
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        synchronize: false,
      }),
    }),
  ],
})
export class ApiModule {}
