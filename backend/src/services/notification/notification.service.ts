import { logger } from '~/services/services';
class Notification {
  public sendNotifications(): void {
    logger.log('Coords received');
  }
}

export { Notification };
