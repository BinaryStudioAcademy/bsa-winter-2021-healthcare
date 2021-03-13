import { AppEnvironment } from '~/common/enums/app/app-environment.enum';

const { NODE_ENV, PORT, SECRET_KEY } = process.env;

const ENV = {
  APP: {
    NODE_ENV: NODE_ENV as AppEnvironment,
    SERVER_PORT: PORT ?? 3001,
    SECRET: SECRET_KEY ?? '',
  },
};

export { ENV };
