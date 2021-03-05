import jwt from 'jsonwebtoken';
import { secret, expiresIn } from '../../../../config/jwt.config';

// TODO: define data type
export const createToken = (data: any) => jwt.sign(data, secret, { expiresIn });
