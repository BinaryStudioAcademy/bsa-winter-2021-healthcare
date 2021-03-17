import { Response, Request, NextFunction } from 'express';
import { AuthApiPath } from '~/common/enums';
import { jwtMiddleWare } from './jwt.middleware';

const authorizationMiddleware = (routesWhiteList: AuthApiPath[] = []) => (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  routesWhiteList.some((route) => route === req.path)
    ? next()
    : jwtMiddleWare(req, res, next);
};

export { authorizationMiddleware };
