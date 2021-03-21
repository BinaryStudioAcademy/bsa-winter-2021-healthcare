import { NotificationModel } from '../models';
import { INotification } from '~/common/interfaces';

class NotificationRepository {
  public getAll(): Promise<INotification[]> {
    return NotificationModel.findAll();
  }
}

export { NotificationRepository };
