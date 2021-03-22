import { Router } from 'express';
import { ApiPath, NotificationsApiPath, HttpCode } from '~/common/enums';
import { notification as notificationService } from '~/services/services';

const initNotificationApi = (apiRouter: Router): Router => {
  const notificationRouter = Router();

  apiRouter.use(ApiPath.NOTIFICATIONS, notificationRouter);

  notificationRouter.get(NotificationsApiPath.$USER_ID, async (req, res, next) => {
    try {
      const notifications = await notificationService.getAllNotificationsLoggedUser(req.params.userId);
      res.status(HttpCode.OK).json(notifications);
    } catch (error) {
      next(error);
    }
  });

  return notificationRouter;
};

export { initNotificationApi };
