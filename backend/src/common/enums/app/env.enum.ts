import { AppEnvironment } from '~/common/enums/app/app-environment.enum';

const { NODE_ENV, APP_SERVER_PORT } = process.env;

const ENV = {
  APP: {
    NODE_ENV: NODE_ENV as AppEnvironment,
    SERVER_PORT: APP_SERVER_PORT ?? 3001,
  },
};

export { ENV };
