import { Router } from 'express';
import { ApiPath, NotificationApiPath, HttpCode } from '~/common/enums';
import { notification as notificationService } from '~/services/services';

const initNotificationApi = (apiRouter: Router): Router => {
  const notificationRouter = Router();

  apiRouter.use(ApiPath.NOTIFICATIONS, notificationRouter);

  notificationRouter.get(NotificationApiPath.USERS_$ID, async (req, res, next) => {
    try {
      const notifications = await notificationService.getNotificationsByUser(req.params.id);
      res.status(HttpCode.OK).json(notifications);
    } catch (error) {
      next(error);
    }
  });

  notificationRouter.post(NotificationApiPath.COVID, async (req, res, next) => {
    try {
      notificationService.sendCovidNotifications(req.body, req.user?.id);
      res.status(HttpCode.OK).json(req.body);
    } catch(error) {
      next(error);
    }
  });

  return notificationRouter;
};

export { initNotificationApi };
