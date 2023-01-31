import { DataSource, DataSourceOptions } from 'typeorm';
import { configuration } from './configuration';

export const dataSourceConfigOptions: DataSourceOptions = {
  type: 'postgres',
  url: configuration.database.uri,
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
};

export const AppDataSource = new DataSource(dataSourceConfigOptions);
