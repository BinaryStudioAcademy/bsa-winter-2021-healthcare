import { ClinicType, ClinicKey } from '~/common/enums';

interface IClinic {
  [ClinicKey.ID]: string;
  [ClinicKey.NAME]: string;
  [ClinicKey.ADDRESS]: string;
  [ClinicKey.IMAGE_PATH]: string;
  [ClinicKey.CLINIC_TYPE]: ClinicType;
  [ClinicKey.CREATED_AT]: string;
  [ClinicKey.UPDATED_AT]: string;
  [ClinicKey.CITY_ID]:string;
}

export type { IClinic };
