import { EditUserPayloadKey, UserSex, UserType } from '../../enums'

export interface IEditUserPayload {
  [EditUserPayloadKey.NAME]: string;
  [EditUserPayloadKey.SURNAME]: string;
  [EditUserPayloadKey.EMAIL]: string;
  [EditUserPayloadKey.PASSWORD]: string;
  [EditUserPayloadKey.RETYPE_PASSWORD]: string;
  [EditUserPayloadKey.PHONE]: string;
  [EditUserPayloadKey.TYPE]: UserType;
  [EditUserPayloadKey.SEX]: UserSex;
  [EditUserPayloadKey.BIRTHDATE]: string;
}
