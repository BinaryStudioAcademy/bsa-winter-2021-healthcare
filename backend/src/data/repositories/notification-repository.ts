import { NotificationModel } from '../models';
import { INotification, INewNotification } from '~/common/interfaces';

class NotificationRepository {

  public getAll(): Promise<INotification[]> {
    return NotificationModel.findAll();
  }

  public createNotification(notification: INewNotification): Promise<INotification> {
    return NotificationModel.create(notification);
  }
}

export { NotificationRepository };
