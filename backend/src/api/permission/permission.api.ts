import { Router } from 'express';
import { ApiPath, HttpCode, PermissionsApiPath } from '~/common/enums';
import { permission as permissionService } from '~/services/services';

const initPermissionApi = (apiRouter: Router): Router => {
  const permissionRouter = Router();

  apiRouter.use(ApiPath.PERMISSIONS, permissionRouter);

  permissionRouter.get(PermissionsApiPath.ROOT, async (req, res, next) => {
    try {
      const permission = await permissionService.getAllPermissions();
      res.status(HttpCode.OK).json(permission);
    } catch (error) {
      next(error);
    }
  });

  permissionRouter.post(PermissionsApiPath.ROOT, async (req, res, next) => {
    try {
      const permission = await permissionService.addPermissionToUser(req.body);
      res.status(HttpCode.CREATED).json(permission);
    } catch (error) {
      next(error);
    }
  });

  permissionRouter.delete(PermissionsApiPath.$ID, async (req, res, next) => {
    try {
      const isDelete = await permissionService.deletePermissionForUser(req.params.id,req.body.permissionId);
      res.status(HttpCode.OK).json(isDelete);
    } catch (error) {
      next(error);
    }
  });

  return permissionRouter;
};

export { initPermissionApi };
