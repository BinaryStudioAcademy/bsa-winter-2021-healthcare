import { ClinicKey, ClinicType } from 'common/enums';
import { IClinic } from 'common/interfaces';

const DEFAULT_CLINIC_VALUE: IClinic = {
  [ClinicKey.ID]: '',
  [ClinicKey.NAME]: '',
  [ClinicKey.IMAGE_PATH]: '',
  [ClinicKey.ADDRESS]: '',
  [ClinicKey.CLINIC_TYPE]: ClinicType.STATE,
  [ClinicKey.CREATED_AT]: '',
  [ClinicKey.UPDATED_AT]: '',
  [ClinicKey.CITY_ID]:' ',
};

export { DEFAULT_CLINIC_VALUE };
