import { ENV } from '~/common/enums';

const JWT_CONFIG = {
  EXPIRES_IN: '24h',
  SECRET: ENV.APP.SECRET,
};

export { JWT_CONFIG };
