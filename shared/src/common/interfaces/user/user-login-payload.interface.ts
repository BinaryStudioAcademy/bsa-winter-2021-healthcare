import { LoginPayloadKey } from '~/common/enums';

export type IUserLoginPayload = {
  [LoginPayloadKey.EMAIL]: string;
  [LoginPayloadKey.PASSWORD]: string;
};
