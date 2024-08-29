import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import AppConfig from '../config/app.config';
import DatabaseConfig from '../config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [AppConfig, DatabaseConfig],
    }),
  ],
})
export class EnvModule {}
