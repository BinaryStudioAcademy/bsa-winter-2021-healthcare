import { EditUserPayloadKey, UserSex, UserType } from '../../enums'

export interface IEditUserPayload {
  [EditUserPayloadKey.ID]?:string;
  [EditUserPayloadKey.NAME]: string;
  [EditUserPayloadKey.SURNAME]: string;
  [EditUserPayloadKey.EMAIL]: string;
  [EditUserPayloadKey.PASSWORD]: string;
  [EditUserPayloadKey.RETYPE_PASSWORD]: string;
  [EditUserPayloadKey.PHONE]: string;
  [EditUserPayloadKey.TYPE]: UserType;
  [EditUserPayloadKey.IMAGE_PATH]?:string;
  [EditUserPayloadKey.SEX]: UserSex;
  [EditUserPayloadKey.BIRTHDATE]: string;
  [EditUserPayloadKey.CREATED_AT]?:string;
  [EditUserPayloadKey.UPDATED_AT]?:string;
}
