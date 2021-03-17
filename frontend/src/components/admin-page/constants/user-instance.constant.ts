import { UserKey, UserSex, UserType } from 'common/enums';
import { IUser } from 'common/interfaces';

const DEFAULT_USER_INSTANCE: IUser = {
  [UserKey.ID]: '',
  [UserKey.NAME]: '',
  [UserKey.SURNAME]: '',
  [UserKey.BIRTHDATE]: '',
  [UserKey.SEX]: UserSex.MALE,
  [UserKey.TYPE]: UserType.PATIENT,
  [UserKey.PHONE]: '',
  [UserKey.EMAIL]: '',
  [UserKey.PASSWORD]: '',
  [UserKey.IMAGE_PATH]: '',
  [UserKey.CREATED_AT]: '',
  [UserKey.UPDATED_AT]: '',
};

export { DEFAULT_USER_INSTANCE };
