import jwt from 'jsonwebtoken';
import { JWT_CONFIG } from '../../../../config/jwt.config';

export const createToken = (data: Record<string, unknown>): string =>
  jwt.sign(data, JWT_CONFIG.SECRET, {
    expiresIn: JWT_CONFIG.EXPIRES_IN,
  });
