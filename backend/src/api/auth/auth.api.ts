import { Router } from 'express';
import { ApiPath, AuthApiPath } from '~/common/enums';
import { login } from '~/services/services';

const initAuthApi = (apiRouter: Router): Router => {
  const authRouter = Router();

  apiRouter.use(ApiPath.AUTH, authRouter);

  // TODO: create auth middleware for login
  authRouter.post(AuthApiPath.LOGIN, (req, res, next) =>
    login(req.body)
      .then((data) => res.send(data))
      .catch(next),
  );

  return authRouter;
};

export { initAuthApi };
