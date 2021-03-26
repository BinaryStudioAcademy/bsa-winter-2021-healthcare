import { ClinicKey, ClinicType } from 'common/enums';
import { IClinicPayload } from 'common/interfaces';

const DEFAULT_CLINIC_VALUE: IClinicPayload = {
  [ClinicKey.NAME]: '',
  [ClinicKey.ADDRESS]: '',
  [ClinicKey.IMAGE_PATH]: null,
  [ClinicKey.CLINIC_TYPE]: ClinicType.STATE,
  [ClinicKey.CITY_ID]:'',
};

export { DEFAULT_CLINIC_VALUE };
