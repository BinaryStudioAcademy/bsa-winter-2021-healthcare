import { Router } from 'express';
import {
  userRegister as userRegisterSchema,
  login as loginSchema,
} from '~/validation-schemas';
import { ApiPath, AuthApiPath, HttpCode } from '~/common/enums';
import {
  authenticationMiddleware,
  registrationMiddleware,
  validateSchema,
} from '~/middlewares';
import { authService } from '~/services/services';

const initAuthApi = (apiRouter: Router): Router => {
  const authRouter = Router();

  apiRouter.use(ApiPath.AUTH, authRouter);

  authRouter.post(
    AuthApiPath.SIGNUP,
    validateSchema(userRegisterSchema),
    registrationMiddleware,
    (req, res, next) => {
      const user = req.user;
      if (user) {
        return authService
          .signUp(user)
          .then((data) => res.status(HttpCode.CREATED).json(data))
          .catch(next);
      }
    },
  );

  authRouter.post(
    AuthApiPath.LOGIN,
    validateSchema(loginSchema),
    authenticationMiddleware,
    (req, res, next) => {
      const user = req.user;
      if (user) {
        return authService
          .login(user)
          .then((data) => res.status(HttpCode.OK).send(data))
          .catch(next);
      }
    },
  );
  return authRouter;
};

export { initAuthApi };
