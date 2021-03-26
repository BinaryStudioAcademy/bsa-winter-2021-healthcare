import { ClinicKey, ClinicType } from '~/common/enums';

interface IClinicPayload {
  [ClinicKey.NAME]: string;
  [ClinicKey.ADDRESS]: string;
  [ClinicKey.IMAGE_PATH]: string | null;
  [ClinicKey.CLINIC_TYPE]: ClinicType.STATE;
  [ClinicKey.CITY_ID]: string;
}

export type { IClinicPayload };
