import { NotificationModel } from '../models';
import { INotification, INewNotification } from '~/common/interfaces';

class Notification {

  public getAll(): Promise<INotification[]> {
    return NotificationModel.findAll();
  }

  public createNotification(notification: INewNotification): Promise<INotification> {
    return NotificationModel.create(notification);
  }

  public getNotificationsByUser( userId: string ): Promise<INotification[]> {
    return NotificationModel.findAll({
      where: { to: userId },
    });
  }
}

export { Notification };
