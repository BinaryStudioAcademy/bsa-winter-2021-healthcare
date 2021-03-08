import { Router } from 'express';
import { ApiPath, HttpCode, UsersApiPath, UserType } from '~/common/enums';
import { userService } from '~/services/services';

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

  userRouter.get(UsersApiPath.$TYPE, async (_req, res, next) => {
    try {
      const users = await userService.getUsersByType(_req.params.type as UserType);
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(HttpCode.OK).json(users);
    } catch(error) {
      next(error);
    }
  });

  userRouter.get(UsersApiPath.$ID, async (_req, res, next) => {
    try {
      const user = await userService.getUserById(_req.params.id);
      res.status(HttpCode.OK).json(user);
    } catch(error) {
      next(error);
    }
  });

  userRouter.post(UsersApiPath.ROOT, async (_req, res, next) => {
    try {
      const user = await userService.createNewUser(_req.body);
      res.status(HttpCode.OK).json(user);
    } catch(error) {
      next(error);
    }
  });

  userRouter.put(UsersApiPath.$ID, async (_req, res, next) => {
    try {
      const user = await userService.updateUser(_req.params.id, _req.body);
      res.status(HttpCode.OK).json(user);
    } catch(error) {
      next(error);
    }
  });

  userRouter.delete(UsersApiPath.$ID, async (_req, res, next) => {
    try {
      await userService.deleteUser(_req.params.id);
      res.status(HttpCode.NO_CONTENT).json();
    } catch(error) {
      next(error);
    }
  });


  return userRouter;
};

export { initUserApi };
