import { ClinicKey } from 'common/enums';

type DoctorsClinic = {
  [ClinicKey.ID]: string;
  [ClinicKey.NAME]: string;
  [ClinicKey.ADDRESS]: string;
  [ClinicKey.CLINIC_TYPE]: string;
};

export type { DoctorsClinic };
