import { RegisterPayloadKey, UserType, UserSex } from '~/common/enums';

interface IRegisterPayload {
  [RegisterPayloadKey.NAME]: string;
  [RegisterPayloadKey.SURNAME]: string;
  [RegisterPayloadKey.SEX]: UserSex;
  [RegisterPayloadKey.BIRTH_DATE]: string;
  [RegisterPayloadKey.EMAIL]: string;
  [RegisterPayloadKey.PASSWORD]: string;
  [RegisterPayloadKey.RETYPE_PASSWORD]?: string;
  [RegisterPayloadKey.PHONE]: string;
  [RegisterPayloadKey.TYPE]: UserType;
}

export type { IRegisterPayload };
