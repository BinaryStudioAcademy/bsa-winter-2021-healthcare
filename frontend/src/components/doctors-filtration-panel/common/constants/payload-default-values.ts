import { ClinicType, DoctorFiltration } from 'common/enums';
import { IDoctorFiltrationPayload } from 'common/interfaces';

const DEFAULT_VALUES: IDoctorFiltrationPayload = {
  [DoctorFiltration.DOCTOR_NAME]: '',
  [DoctorFiltration.CITY]: '',
  [DoctorFiltration.SPECIALTY]: [],
  [DoctorFiltration.TYPE_OF_CLINIC]: ClinicType.STATE
}

export { DEFAULT_VALUES };
