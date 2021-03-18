import { Router } from 'express';
import {
  userRegister as userRegisterSchema,
  login as loginSchema,
} from '~/validation-schemas';
import { ApiPath, AuthApiPath, HttpCode } from '~/common/enums';
import {
  authentication as authenticationMiddleware,
  registration as registrationMiddleware,
  validateSchema,
} from '~/middlewares';
import { authService } from '~/services/services';
import { IUser } from '~/common/interfaces';

const initAuthApi = (apiRouter: Router): Router => {
  const authRouter = Router();

  apiRouter.use(ApiPath.AUTH, authRouter);

  authRouter.post(
    AuthApiPath.SIGNUP,
    validateSchema(userRegisterSchema),
    registrationMiddleware,
    (req, res, next) => {
      const user = req.user as IUser;
      return authService
        .signUp(user)
        .then((data) => res.status(HttpCode.CREATED).json(data))
        .catch(next);
    },
  );

  authRouter.post(
    AuthApiPath.LOGIN,
    validateSchema(loginSchema),
    authenticationMiddleware,
    (req, res, next) => {
      const user = req.user as IUser;
      return authService
        .login(user)
        .then((data) => res.status(HttpCode.OK).send(data))
        .catch(next);
    },
  );
  return authRouter;
};

export { initAuthApi };
