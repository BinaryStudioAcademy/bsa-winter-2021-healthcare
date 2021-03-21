import { notificationRepository } from '~/data/repositories';
import { INotification } from '~/common/interfaces';

class Notification {
  public getAllNotifications(): Promise<INotification[]> {
    return notificationRepository.getAll();
  }
}

export { Notification };
