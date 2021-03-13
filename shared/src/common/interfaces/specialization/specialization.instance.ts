import { SpecializationKey } from '~/common/enums';

interface ISpecialization {
  [SpecializationKey.ID]: string
  [SpecializationKey.TEXT]: string
  [SpecializationKey.CREATED_AT]: string
  [SpecializationKey.UPDATED_AT]: string
}

export type { ISpecialization };
