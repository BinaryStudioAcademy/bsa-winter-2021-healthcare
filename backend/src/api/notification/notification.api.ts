import { Router } from 'express';
import { ApiPath, NotificationsApiPath, HttpCode } from '~/common/enums';
import { notification as notificationService } from '~/services/services';

const initNotificationApi = (apiRouter: Router): Router => {
  const notificationRouter = Router();

  apiRouter.use(ApiPath.NOTIFICATIONS, notificationRouter);

  notificationRouter.get(NotificationsApiPath.ROOT, async (_req, res, next) => {
    try {
      const notifications = await notificationService.getAllNotifications();
      res.status(HttpCode.OK).json(notifications);
    } catch (error) {
      next(error);
    }
  });

  return notificationRouter;
};

export { initNotificationApi };
