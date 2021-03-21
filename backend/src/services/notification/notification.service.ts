import { notificationRepository } from '~/data/repositories';
import { INotification } from '~/common/interfaces';
import { logger } from '~/services/services';

class Notification {
  public sendNotifications(): void {
    logger.log('Coords received');
  }

  public getAllNotifications(): Promise<INotification[]> {
    return notificationRepository.getAll();
  }
}

export { Notification };
