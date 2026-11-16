import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: process.env.DB_PORT ? Number.parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USERNAME ?? 'postgres',
  password: process.env.DB_PASSWORD ?? 'postgres',
  database: process.env.DB_DATABASE ?? 'recruitment_saas',
  autoLoadEntities: true,
  synchronize: false,
  logging: process.env.DB_LOGGING === 'true',
}));
