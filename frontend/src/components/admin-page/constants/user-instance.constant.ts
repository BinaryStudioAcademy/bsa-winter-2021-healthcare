import { EditUserPayloadKey, UserSex, UserType } from 'common/enums'
import { IUser } from 'common/interfaces';

const DEFAULT_USER_INSTANCE:IUser = {
    [EditUserPayloadKey.ID]:'',
    [EditUserPayloadKey.NAME]: '',
    [EditUserPayloadKey.SURNAME]: '',
    [EditUserPayloadKey.EMAIL]: '',
    [EditUserPayloadKey.PASSWORD]: '',
    [EditUserPayloadKey.PHONE]: '',
    [EditUserPayloadKey.BIRTHDATE]: '',
    [EditUserPayloadKey.IMAGE_PATH]:'',
    [EditUserPayloadKey.TYPE]: UserType.PATIENT,
    [EditUserPayloadKey.SEX]: UserSex.MALE,
    [EditUserPayloadKey.CREATED_AT]:'',
    [EditUserPayloadKey.UPDATED_AT]:'',
};

export { DEFAULT_USER_INSTANCE }
