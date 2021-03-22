import { NotificationKey } from '~/common/enums';
import { GeolocationKey, MapKey } from '~/common/enums';
import { geolocation as geolocationRepository, notification as notificationRepository } from '~/data/repositories';
import { IGeolocation, ICoordsSet, INewNotification } from '~/common/interfaces';

class Notification {
  public async sendNotifications(selectedArea: ICoordsSet): Promise<void> {
    const relativeGeolocations = await this.getRelativeGeolocations(selectedArea);
    const relativeUserIds = this.getRelativeUserIds(relativeGeolocations);
    const fromUserId = selectedArea.userId;

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

  private async getRelativeGeolocations(selectedArea: ICoordsSet): Promise<IGeolocation[]> {
    const allGeolocation = await geolocationRepository.getAll();

    const relativeGeolocations = allGeolocation.filter((userCoords: IGeolocation) => {
      const isUserInLatArea =
        userCoords[GeolocationKey.LAT] >= selectedArea[MapKey.MIN_LAT] &&
        userCoords[GeolocationKey.LAT] <= selectedArea[MapKey.MAX_LAT];
      const isUserInLngArea =
        userCoords[GeolocationKey.LNG] >= selectedArea[MapKey.MIN_LNG] &&
        userCoords[GeolocationKey.LNG] <= selectedArea[MapKey.MAX_LNG];

      return isUserInLatArea && isUserInLngArea;
    });

    return relativeGeolocations;
  }

  private getRelativeUserIds(relativeGeolocations: IGeolocation[]): string[] {
    return relativeGeolocations.map((userCoords: IGeolocation) => userCoords.userId);
  }
}

export { Notification };
