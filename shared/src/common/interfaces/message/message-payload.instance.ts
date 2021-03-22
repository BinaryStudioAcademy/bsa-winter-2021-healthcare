import { MessageKey } from '~/common/enums';

interface IMessagePayload {
  [MessageKey.TO]: string;
  [MessageKey.TEXT]: string;
}

export type { IMessagePayload };
