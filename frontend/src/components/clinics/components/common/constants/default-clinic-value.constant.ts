import { ClinicKey, ClinicType } from 'common/enums';
import { IClinicPayload } from 'common/interfaces';
import ClinicDefaultImage from 'assets/images/clinic-default.jpg';

const DEFAULT_CLINIC_VALUE: IClinicPayload = {
  [ClinicKey.NAME]: '',
  [ClinicKey.ADDRESS]: '',
  [ClinicKey.IMAGE_PATH]: ClinicDefaultImage,
  [ClinicKey.CLINIC_TYPE]: ClinicType.STATE,
};

export { DEFAULT_CLINIC_VALUE };
