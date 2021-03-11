import { Router } from 'express';
import { userRegister as userRegisterSchema } from '~/validation-schemas';
import { login as loginSchema } from '~/validation-schemas';
import {
  ApiPath,
  AuthApiPath,
  HttpCode,
  AuthValidationMessage,
} from '~/common/enums';
import { validateSchema } from '~/middlewares';
import { authService } from '~/services/services';
import { userRepository } from '~/data/repositories';
import { checkIsPasswordSame } from '~/helpers';

const initAuthApi = (apiRouter: Router): Router => {
  const authRouter = Router();

  apiRouter.use(ApiPath.AUTH, authRouter);

  // TODO: create auth middleware for register
  authRouter.post(AuthApiPath.SIGNUP, validateSchema(userRegisterSchema), (req, res, next) => {
    return authService
      .signUp(req.body)
      .then((data) => res.status(HttpCode.CREATED).json(data))
      .catch(next);
  });
  authRouter.post(
    AuthApiPath.LOGIN,
    validateSchema(loginSchema),
    async (req, res, next) => {
      const { email, password } = req.body;
      const user = await userRepository.findByEmail(email);

      if (!user) {
        return res.status(HttpCode.UNAUTHORIZED).send({
          messages: [AuthValidationMessage.EMAIL_INCORRECT],
        });
      }

      const isPasswordSame = await checkIsPasswordSame(user, password);

      if (!isPasswordSame) {
        return res.status(HttpCode.UNAUTHORIZED).send({
          messages: [AuthValidationMessage.PASSWORD_INCORRECT],
        });
      }

      return authService
        .login(user)
        .then((data) => res.status(HttpCode.OK).send(data))
        .catch(next);
    },
  );

  return authRouter;
};

export { initAuthApi };
