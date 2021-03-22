import { NotificationModel } from '../models';
import { INotification } from '~/common/interfaces';

class NotificationRepository {
  public getNotificationsLoggedUser( userId: string ): Promise<INotification[]> {
    return NotificationModel.findAll({
      where: { to: userId },
    });
  }
}

export { NotificationRepository };
