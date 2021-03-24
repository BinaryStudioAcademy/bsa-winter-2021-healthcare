import { ClinicKey, ClinicType } from '~/common/enums';

interface IClinicPayload {
  [ClinicKey.NAME]: string;
  [ClinicKey.ADDRESS]: string;
  [ClinicKey.IMAGE_PATH]: string,
  [ClinicKey.CLINIC_TYPE]: ClinicType.STATE;
}

export type { IClinicPayload };
