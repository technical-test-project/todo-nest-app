import { registerAs } from '@nestjs/config';
import * as process from 'node:process';

export default registerAs('appConfig', () => ({
  port: parseInt(process.env.APP_PORT) || 8080,
  node_env: process.env.NODE_ENV,
}));
