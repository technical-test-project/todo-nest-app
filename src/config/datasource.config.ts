import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: parseInt(configService.get('DB_PORT'), 10),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_DATABASE'),
  synchronize: configService.get('NODE_ENV') === 'development',
  logging: configService.get('NODE_ENV') === 'development',
  // entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  migrations: [`${__dirname}/../database/migrations/*{.ts,.js}`],
  // migrationsTableName: 'migrations',
});
