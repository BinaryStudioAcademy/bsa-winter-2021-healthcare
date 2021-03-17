import { UserSpecializationKey } from '~/common/enums';

interface IUserSpecialization {
  [UserSpecializationKey.CREATED_AT]: string;
  [UserSpecializationKey.UPDATED_AT]: string;
}

export type { IUserSpecialization };
