import { DataSource } from 'typeorm';
import { Subscription } from './subscription/subscription.schema';
import { config } from 'dotenv';

config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  username: process.env.POSTGRES_USER,
  port: Number(process.env.POSTGRES_PORT),
  host: 'localhost',
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [Subscription],
  // should be false for Production
  // synchronize: true,
  logging: true,
  migrations: [],
  subscribers: [],
});
