import { NotificationKey } from '~/common/enums';

interface INotification {
  [NotificationKey.ID]?: string;
  [NotificationKey.TEXT]: string;
  [NotificationKey.TOPIC]: string;
  [NotificationKey.CREATED_AT]: string;
  [NotificationKey.UPDATED_AT]: string;
}

export type { INotification };
