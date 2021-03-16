import { DoctorFiltration, DoctorType, ClinicType } from '~/common/enums';

interface IDoctorFiltrationPayload {
  [DoctorFiltration.SEARCH]: string;
  [DoctorFiltration.CITY]: string;
  [DoctorFiltration.SPECIALTY]: DoctorType[];
  [DoctorFiltration.TYPE_OF_CLINIC]: ClinicType;
}

export type { IDoctorFiltrationPayload };
