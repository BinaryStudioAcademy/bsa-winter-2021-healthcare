import { NotificationKey } from '~/common/enums';

interface INewNotification {
  [NotificationKey.TEXT]: string;
  [NotificationKey.TOPIC]: string;
  [NotificationKey.TO]: string;
  [NotificationKey.USER_ID]: string;
}

export type { INewNotification };
