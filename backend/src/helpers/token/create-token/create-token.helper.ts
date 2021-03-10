import jwt from 'jsonwebtoken';
import { JWT_CONFIG } from '~/configs';

const createToken = (data: Record<string, unknown>): string => {
  return jwt.sign(data, JWT_CONFIG.SECRET, {
    expiresIn: JWT_CONFIG.EXPIRES_IN,
  });
};

export { createToken };
