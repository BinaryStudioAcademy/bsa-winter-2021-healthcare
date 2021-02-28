import { ENV } from '~/common/enums';

const config = {
  database: ENV.DB.NAME,
  username: ENV.DB.USERNAME,
  password: ENV.DB.PASSWORD,
  host: ENV.DB.HOST,
  port: Number(ENV.DB.PORT),
  dialect: ENV.DB.DIALECT,
  logging: false,
};

export { config };
