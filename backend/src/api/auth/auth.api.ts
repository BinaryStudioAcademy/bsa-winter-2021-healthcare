import { Router } from 'express';
import { login as loginSchema } from '~/validation-schemas';
import { ApiPath, AuthApiPath } from '~/common/enums';
import { validateSchema } from '~/middlewares';
import { authService } from '~/services/services';

const initAuthApi = (apiRouter: Router): Router => {
  const authRouter = Router();

  apiRouter.use(ApiPath.AUTH, authRouter);

  // TODO: create auth middleware for login
  authRouter.post(AuthApiPath.LOGIN, validateSchema(loginSchema), (req, res, next) => {
    return authService
      .login(req.body)
      .then((data) => res.send(data))
      .catch(next);
  });

  return authRouter;
};

export { initAuthApi };
