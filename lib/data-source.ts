import { DataSource, DataSourceOptions } from 'typeorm';
import { configuration } from './configuration';
import { AccountEntity } from './graphql/user/account.entity';
import { SessionEntity } from './graphql/user/session.entity';
import { UserEntity } from './graphql/user/user.entity';
import { VerificationTokenEntity } from './graphql/user/veryfication_token.entity';

export const dataSourceConfigOptions: DataSourceOptions = {
  type: 'postgres',
  url: configuration.database.uri,
  synchronize: true,
  logging: true,
  entities: [UserEntity, SessionEntity, AccountEntity, VerificationTokenEntity],
  subscribers: [],
  migrations: [],
};

export const AppDataSource = new DataSource(dataSourceConfigOptions);
