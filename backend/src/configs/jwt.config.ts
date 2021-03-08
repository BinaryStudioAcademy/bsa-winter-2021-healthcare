import { ENV } from 'src/common/enums';

const JWT_CONFIG = {
  EXPIRES_IN: '24h',
  SECRET: ENV.APP.SECRET,
}

export { JWT_CONFIG };
