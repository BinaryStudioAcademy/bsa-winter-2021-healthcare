import { Router } from 'express';
import {
  userRegister as userRegisterSchema,
  login as loginSchema,
} from '~/validation-schemas';
import { ApiPath, AuthApiPath, HttpCode, UserType } from '~/common/enums';
import {
  authentication as authenticationMiddleware,
  registration as registrationMiddleware,
  validateSchema,
} from '~/middlewares';
import {
  auth as authService,
  doctor as doctorService,
} from '~/services/services';
import { IUser } from '~/common/interfaces';
import { checkIsOneOf } from '~/helpers';

const initAuthApi = (apiRouter: Router): Router => {
  const authRouter = Router();

  apiRouter.use(ApiPath.AUTH, authRouter);

  authRouter.post(
    AuthApiPath.SIGNUP,
    validateSchema(userRegisterSchema),
    registrationMiddleware,
    async (req, res, next) => {
      try {
        const user = req.user as IUser;
        const data = await authService.signUp(user);
        const isDoctorType = checkIsOneOf(user.type, UserType.DOCTOR);
        if (isDoctorType) {
          await doctorService.createDoctor({
            about: '',
            userId: data.user.id as string,
          });
        }
        res.status(HttpCode.CREATED).json(data);
      } catch (error) {
        next(error);
      }
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
