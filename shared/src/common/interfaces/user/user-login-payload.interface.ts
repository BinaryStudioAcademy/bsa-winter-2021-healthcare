import { LoginPayloadKey } from '~/common/enums';

type IUserLoginPayload = {
  [LoginPayloadKey.EMAIL]: string;
  [LoginPayloadKey.PASSWORD]: string;
};

export type { IUserLoginPayload };
