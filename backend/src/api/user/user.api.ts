import { Router } from 'express';
import { ApiPath, HttpCode, UsersApiPath, UserType, DoctorType, ClinicType } from '~/common/enums';
import { validateSchema } from '~/middlewares';
import { userRegister as userRegisterSchema, editUser as validationEditUser } from '~/validation-schemas';
import { user as userService, doctor as doctorService } from '~/services/services';
import { checkIsOneOf } from '~/helpers';
import { IDoctorFiltrationPayload } from '~/common/interfaces';
import jwt from 'jsonwebtoken';

const initUserApi = (apiRouter: Router): Router => {
  const userRouter = Router();

  apiRouter.use(ApiPath.USERS, userRouter);

  userRouter.get(UsersApiPath.ROOT, async (_req, res, next) => {
    try {
      const users = await userService.getAllUsers();
      res.status(HttpCode.OK).json(users);
    } catch (error) {
      next(error);
    }
  });

  userRouter.get(UsersApiPath.TYPE_$TYPE, async (req, res, next) => {
    try {
      const filter: IDoctorFiltrationPayload = {
        doctorName: req.query.doctorName as string,
        city: req.query.city as string,
        specialty: req.query.specialty as DoctorType[],
        typeOfClinic: req.query.typeOfClinic as ClinicType[],
      };

      const users = await userService.getUsersByType(req.params.type as UserType, filter);
      res.status(HttpCode.OK).json(users);
    } catch (error) {
      next(error);
    }
  });

  userRouter.get(UsersApiPath.CURRENT_USER, async (req, res, next) => {
    try {
      const token = (req.header('authorization') as string).split(' ')[1];
      const decoded = jwt.decode(token) as { [key: string]: string };
      const user = await userService.getUserById(decoded.id);
      res.status(HttpCode.OK).json(user);
    } catch (error) {
      next(error);
    }
  });

  userRouter.get(UsersApiPath.$ID, async (req, res, next) => {
    try {
      const user = await userService.getUserById(req.params.id);
      res.status(HttpCode.OK).json(user);
    } catch (error) {
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
    } catch (error) {
      next(error);
    }
  });

  userRouter.get(UsersApiPath.FILTER_BY_$NAME, async (req, res, next) => {
    try {
      const result = await userService.filterUsersByName(req.params.name);
      res.status(HttpCode.OK).json(result);
    } catch (error) {
      next(error);
    }
  });

  userRouter.post(UsersApiPath.ROOT, validateSchema(userRegisterSchema), async (req, res, next) => {
    try {
      const user = await userService.createNewUser(req.body);
      res.status(HttpCode.OK).json(user);
    } catch (error) {
      next(error);
    }
  });

  userRouter.put(UsersApiPath.$ID, validateSchema(validationEditUser), async (req, res, next) => {
    try {
      const isDoctorType = checkIsOneOf(req.body.type, UserType.DOCTOR);
      const hasDoctor = await doctorService.getByUserId(req.body.id);
      if (isDoctorType && !hasDoctor) {
        await doctorService.createDoctor({
          about: '',
          userId: req.body.id as string,
        });
      }
      const user = await userService.updateUser(req.params.id, req.body);
      res.status(HttpCode.OK).json(user);
    } catch (error) {
      next(error);
    }
  });

  userRouter.delete(UsersApiPath.$ID, async (req, res, next) => {
    try {
      const isDeleted = await userService.deleteUser(req.params.id);
      res.status(HttpCode.OK).json(isDeleted);
    } catch (error) {
      next(error);
    }
  });

  return userRouter;
};

export { initUserApi };
