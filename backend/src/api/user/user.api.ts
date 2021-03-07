import { Router } from 'express';
import { ApiPath, HttpCode, UsersApiPath } from '~/common/enums';
import { userService } from '~/services/services';

const initUserApi = (apiRouter: Router): Router => {
  const userRouter = Router();

  apiRouter.use(ApiPath.USERS, userRouter);

  userRouter.get(UsersApiPath.ROOT, async (_req, res) => {
    try {
      const users = await userService.getAllUsers()
      res.status(HttpCode.OK).json(users);
    } catch(error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  userRouter.get(UsersApiPath.$ID, async (_req, res) => {
    try {
      const user = await userService.getUserById(_req.params.id);
      res.status(HttpCode.OK).json(user);
    } catch(error) {
      res.status(HttpCode.NOT_FOUND).json(error);
    }
  });

  userRouter.post(UsersApiPath.ROOT, async (_req, res) => {
    try {
      const user = await userService.createNewUser(_req.body);
      res.status(HttpCode.OK).json(user);
    } catch(error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  userRouter.put(UsersApiPath.$ID, async (_req, res) => {
    try {
      const user = await userService.updateUser(_req.params.id, _req.body);
      res.status(HttpCode.OK).json(user);
    } catch(error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  userRouter.delete(UsersApiPath.$ID, async (_req, res) => {
    try {
      await userService.deleteUser(_req.params.id);
      res.status(HttpCode.NO_CONTENT).json();
    } catch(error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });


  return userRouter;
};

export { initUserApi };
