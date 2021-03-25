import { ClinicKey } from 'common/enums';
import { DoctorsClinic } from 'components/profile/components/add-clinic/common';

const DEFAULT_VALUE_FOR_CLINIC_SELECT:DoctorsClinic = {
  [ClinicKey.ID]:'',
  [ClinicKey.NAME]:'',
  [ClinicKey.ADDRESS]:'',
  [ClinicKey.CLINIC_TYPE]:'',
};

export { DEFAULT_VALUE_FOR_CLINIC_SELECT };
