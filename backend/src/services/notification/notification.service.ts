import { INotification } from '~/common/interfaces';
import { NotificationKey } from '~/common/enums';
import { notification as notificationRepository, geolocation as geolocationRepository } from '~/data/repositories';
import { ICoordsSet, INewNotification } from '~/common/interfaces';
import { checkIsRelativeGeolocations, getRelativeUserIds } from './helpers';

class Notification {
  public async sendCovidNotifications(
    selectedArea: ICoordsSet,
    fromUserId: string | undefined,
  ): Promise<void> {
    const geolocations = await geolocationRepository.getAll();
    const relativeGeolocations = await checkIsRelativeGeolocations(geolocations, selectedArea);
    const relativeUserIds = getRelativeUserIds(relativeGeolocations);

    relativeUserIds.forEach(userId => {
      const newNotification: INewNotification = {
        [NotificationKey.TEXT]: 'Please, stay home if possible.',
        [NotificationKey.TOPIC]: 'COVID-19!',
        [NotificationKey.TO]: userId as string,
        [NotificationKey.USER_ID]: fromUserId as string,
      };

      notificationRepository.createNotification(newNotification);
    });
  }

  public getNotificationsByUser(userId: string): Promise<INotification[]> {
    return notificationRepository.getNotificationsByUser(userId);
  }
}

export { Notification };
