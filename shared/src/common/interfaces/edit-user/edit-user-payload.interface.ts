import { EditUserPayloadKey, UserSex, UserType } from '~/common/enums';

type IEditUserPayload = {
  [EditUserPayloadKey.ID]?: string;
  [EditUserPayloadKey.NAME]: string;
  [EditUserPayloadKey.SURNAME]: string;
  [EditUserPayloadKey.EMAIL]: string;
  [EditUserPayloadKey.PHONE]: string;
  [EditUserPayloadKey.TYPE]: UserType;
  [EditUserPayloadKey.IMAGE_PATH]?: string;
  [EditUserPayloadKey.SEX]: UserSex;
  [EditUserPayloadKey.BIRTHDATE]: Date;
  [EditUserPayloadKey.CREATED_AT]?: string;
  [EditUserPayloadKey.UPDATED_AT]?: string;
};

export type { IEditUserPayload };
