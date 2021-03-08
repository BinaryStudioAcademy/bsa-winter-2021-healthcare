import { Router } from 'express';
import { validationUserSchema } from '~/validation-schemas/auth';
import { ApiPath, AuthApiPath } from '~/common/enums';
import { validateSchema } from '~/middlewares';
import { authService } from '~/services/services';

const initAuthApi = (apiRouter: Router): Router => {
  const authRouter = Router();

  apiRouter.use(ApiPath.AUTH, authRouter);

  // TODO: create auth middleware for register
  authRouter.post(AuthApiPath.SIGNUP, validateSchema(validationUserSchema), (req, res, next) => {
    return authService
      .signUp(req.body)
      .then((data) => res.send(data))
      .catch(next);
  });

  return authRouter;
};

export { initAuthApi };
