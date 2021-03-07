import { RegisterPayloadKey } from '../../enums'

export interface IRegisterPayload {
  [RegisterPayloadKey.NAME]: string;
  [RegisterPayloadKey.SURNAME]: string;
  [RegisterPayloadKey.EMAIL]: string;
  [RegisterPayloadKey.PASSWORD]: string;
  [RegisterPayloadKey.RETYPE_PASSWORD]: string;
  [RegisterPayloadKey.PHONE]: string;
  [RegisterPayloadKey.IS_STAFF]: boolean;
}
