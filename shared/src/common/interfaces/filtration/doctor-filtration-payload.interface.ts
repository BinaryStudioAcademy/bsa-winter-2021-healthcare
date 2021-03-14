import { DoctorFiltration, DoctorType, ClinicType, AppointmentType, PaymentType, DoctorAssessment } from '../../enums';

interface IDoctorFiltrationPayload {
  [DoctorFiltration.SEARCH]: string;
  [DoctorFiltration.CITY]: string;
  [DoctorFiltration.DISTRICT]: string;
  [DoctorFiltration.SPECIALTY]: DoctorType;
  [DoctorFiltration.TYPE_OF_CLINIC]: ClinicType;
  [DoctorFiltration.TYPE_OF_RECEPTION]: AppointmentType;
  [DoctorFiltration.PAYMENT]: PaymentType;
  [DoctorFiltration.DOCTORS_ASSESSMENT]: DoctorAssessment;
}

export type { IDoctorFiltrationPayload };
