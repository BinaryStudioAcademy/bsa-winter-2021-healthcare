import { Router } from 'express';
import { ApiPath, HttpCode, UsersApiPath, UserType } from '~/common/enums';
import { validateSchema } from '~/middlewares';
import { userRegister as userRegisterSchema, editUser as validationEditUser } from '~/validation-schemas';
import { userService } from '~/services/services';
import { checkIsOneOf } from '~/helpers';

const initUserApi = (apiRouter: Router): Router => {
  const userRouter = Router();

  apiRouter.use(ApiPath.USERS, userRouter);

  userRouter.get(UsersApiPath.ROOT, async (_req, res, next) => {
    try {
      const users = await userService.getAllUsers();
      res.status(HttpCode.OK).json(users);
    } catch(error) {
      next(error);
    }
  });

  userRouter.get(UsersApiPath.TYPE_$TYPE, async (req, res, next) => {
    try {
      const users = await userService.getUsersByType(req.params.type as UserType, req.body);
      res.status(HttpCode.OK).json(users);
    } catch(error) {
      next(error);
    }
  });

  userRouter.get(UsersApiPath.DOCTOR_DETAILS_$ID, async (req, res, next) => {
    try {
      const doctorDetails = await userService.getDoctorDetailsById(req.params.id);
      const isDoctorType = checkIsOneOf(doctorDetails?.type, UserType.DOCTOR);

      if (!isDoctorType) {
        return res.status(HttpCode.BAD_REQUEST).json(['Error! This user is not a doctor!']);
      }

      return res.status(HttpCode.OK).json(doctorDetails);
    } catch(error) {
      next(error);
    }
  });

  userRouter.post(UsersApiPath.ROOT, validateSchema(userRegisterSchema), async (req, res, next) => {
    try {
      const user = await userService.createNewUser(req.body);
      res.status(HttpCode.OK).json(user);
    } catch(error) {
      next(error);
    }
  });

  userRouter.put(UsersApiPath.$ID, validateSchema(validationEditUser), async (req, res, next) => {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      res.status(HttpCode.OK).json(user);
    } catch(error) {
      next(error);
    }
  });

  userRouter.delete(UsersApiPath.$ID, async (req, res, next) => {
    try {
      const isDeleted = await userService.deleteUser(req.params.id);
      res.status(HttpCode.OK).json(isDeleted);
    } catch(error) {
      next(error);
    }
  });

  return userRouter;
};

export { initUserApi };
