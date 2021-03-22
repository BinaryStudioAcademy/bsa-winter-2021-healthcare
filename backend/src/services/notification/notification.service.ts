import { NotificationKey } from '~/common/enums';
import { notification as notificationRepository } from '~/data/repositories';
import { ICoordsSet, INewNotification } from '~/common/interfaces';
import { checkIsRelativeGeolocations, getRelativeUserIds } from './helpers';

class Notification {
  public async sendNotifications(
    selectedArea: ICoordsSet,
    fromUserId: string | undefined,
  ): Promise<void> {
    const relativeGeolocations = await checkIsRelativeGeolocations(selectedArea);
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
}

export { Notification };
