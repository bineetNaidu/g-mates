import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: 'postgresql://username:password@localhost:5432/g_mates_db',
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
