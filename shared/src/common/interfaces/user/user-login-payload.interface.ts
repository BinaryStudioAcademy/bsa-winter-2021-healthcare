import { LoginPayloadKey } from '~/common/enums';

interface IUserLoginPayload {
  [LoginPayloadKey.EMAIL]: string;
  [LoginPayloadKey.PASSWORD]: string;
}

export type { IUserLoginPayload };
