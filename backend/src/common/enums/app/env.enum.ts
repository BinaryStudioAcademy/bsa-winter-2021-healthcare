import { Dialect } from 'sequelize';
import { AppEnvironment } from '~/common/enums/app/app-environment.enum';

const {
  NODE_ENV,
  APP_SERVER_PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DIALECT,
} = process.env;

const ENV = {
  APP: {
    NODE_ENV: NODE_ENV as AppEnvironment,
    SERVER_PORT: APP_SERVER_PORT ?? 3001,
  },
  DB: {
    NAME: DB_NAME ?? '',
    USERNAME: DB_USERNAME ?? '',
    PASSWORD: DB_PASSWORD ?? '',
    HOST: DB_HOST ?? '',
    PORT: DB_PORT ?? '',
    DIALECT: (DB_DIALECT as Dialect) ?? '',
  },
} as const;

export { ENV };
