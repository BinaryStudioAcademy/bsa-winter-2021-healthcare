import { Router } from 'express';
import { ApiPath, HttpCode, UsersApiPath } from '~/common/enums';
import * as userService from '../../services/api/userService'

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

  userRouter.get(UsersApiPath.IDPARAM, async (_req, res) => {
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

  userRouter.put(UsersApiPath.IDPARAM, async (_req, res) => {
    try {
      const user = await userService.updateUser(_req.params.id, _req.body);
      res.status(HttpCode.OK).json(user);
    } catch(error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });

  userRouter.delete(UsersApiPath.IDPARAM, async (_req, res) => {
    try {
      await userService.deleteUser(_req.params.id);
      res.status(HttpCode.DELETED).json();
    } catch(error) {
      res.status(HttpCode.BAD_REQUEST).json(error);
    }
  });


  return userRouter;
};

export { initUserApi };
