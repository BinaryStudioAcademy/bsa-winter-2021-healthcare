import { Router } from 'express';
import { ApiPath, NotificationApiPath, HttpCode } from '~/common/enums';
import { notification as notificationService } from '~/services/services';

const initNotificationApi = (apiRouter: Router): Router => {
  const mapRouter = Router();

  apiRouter.use(ApiPath.NOTIFICATION, mapRouter);

  mapRouter.post(NotificationApiPath.COVID, async (req, res, next) => {
    try {
      notificationService.sendCovidNotifications(req.body, req.user?.id);
      res.status(HttpCode.OK).json(req.body);
    } catch(error) {
      next(error);
    }
  });

  return mapRouter;
};

export { initNotificationApi };
