import { ENV } from 'src/common/enums';

const JWT_CONFIG = {
  EXPIRES_IN: '24',
  SECRET: ENV.APP.SECRET,
}

export { JWT_CONFIG };
