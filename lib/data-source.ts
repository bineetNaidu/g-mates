import { DataSource, DataSourceOptions } from 'typeorm';
import { configuration } from './configuration';
import { Category } from './graphql/category/category.entity';
import { Game } from './graphql/game/game.entity';
import { AccountEntity } from './graphql/user/account.entity';
import { SessionEntity } from './graphql/user/session.entity';
import { UserEntity } from './graphql/user/user.entity';
import { VerificationTokenEntity } from './graphql/user/veryfication_token.entity';

export const dataSourceConfigOptions: DataSourceOptions = {
  type: 'postgres',
  host: configuration.database.host,
  port: configuration.database.port,
  username: configuration.database.username,
  password: configuration.database.password,
  database: configuration.database.name,
  synchronize: true,
  logging: true,
  entities: [
    UserEntity,
    SessionEntity,
    AccountEntity,
    VerificationTokenEntity,
    Category,
    Game,
  ],
  subscribers: [],
  migrations: [],
};

export const AppDataSource = new DataSource(dataSourceConfigOptions);
