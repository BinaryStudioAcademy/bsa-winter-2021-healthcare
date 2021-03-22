import { Router } from 'express';
import { ApiPath, MapApiPath, HttpCode } from '~/common/enums';
import { notification as notificationService } from '~/services/services';

const initMapApi = (apiRouter: Router): Router => {
  const mapRouter = Router();

  apiRouter.use(ApiPath.MAP, mapRouter);

  mapRouter.post(MapApiPath.SELECT_AREA, async (req, res, next) => {
    try {
      notificationService.sendNotifications(req.body);
      res.status(HttpCode.OK).json(req.body);
    } catch(error) {
      next(error);
    }
  });

  return mapRouter;
};

export { initMapApi };
