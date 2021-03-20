import { DoctorFiltration } from 'common/enums';
import { IDoctorFiltrationPayload } from 'common/interfaces';

const DEFAULT_FILTER_VALUE: IDoctorFiltrationPayload = {
  [DoctorFiltration.DOCTOR_NAME]: '',
  [DoctorFiltration.CITY]: '',
  [DoctorFiltration.SPECIALTY]: [],
  [DoctorFiltration.TYPE_OF_CLINIC]: [],
};

export { DEFAULT_FILTER_VALUE };
