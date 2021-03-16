import { UserSex, UserType, UserKey } from '~/common/enums';

interface IUser {
  [UserKey.ID]?: string
  [UserKey.NAME]: string
  [UserKey.SURNAME]: string
  [UserKey.BIRTHDATE]: string
  [UserKey.SEX]: UserSex
  [UserKey.TYPE]: UserType
  [UserKey.PHONE]: string
  [UserKey.EMAIL]: string
  [UserKey.PASSWORD]: string
  [UserKey.IMAGE_PATH]: string
  [UserKey.DIAGNOSIS]?: string
  [UserKey.CREATED_AT]: string
  [UserKey.UPDATED_AT]: string
}

export type { IUser };
