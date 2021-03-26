import { MessageKey } from '~/common/enums';

interface IMessage {
  [MessageKey.ID]: string;
  [MessageKey.USER_ID]: string;
  [MessageKey.TEXT]: string;
  [MessageKey.CREATED_AT]: string;
  [MessageKey.UPDATED_AT]: string;
}

export type { IMessage };
