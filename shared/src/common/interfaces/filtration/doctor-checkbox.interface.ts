import { DoctorType, ClinicType, AppointmentType, PaymentType, DoctorAssessment } from '../../enums';

interface IDoctorCheckbox {
  [DoctorType.PEDIATRICIAN]: boolean;
  [DoctorType.ENDOCRINOLOGIST]: boolean;
  [DoctorType.DENTIST]: boolean;
  [DoctorType.SURGEON]: boolean;
  [DoctorType.DERMATOLOGIST]:boolean;
  [ClinicType.PRIVATE]: boolean;
  [ClinicType.STATE]: boolean;
  [AppointmentType.OFFLINE]: boolean;
  [AppointmentType.ONLINE]: boolean;
  [PaymentType.GUARANTEE_PROGRAM]: boolean;
  [PaymentType.CLINIC_PRICE]: boolean;
  [DoctorAssessment.WITHOUT_ASSESSMENT]: boolean;
  [DoctorAssessment.NORMAL]: boolean;
  [DoctorAssessment.GOOD]: boolean;
  [DoctorAssessment.VERY_GOOD]: boolean;
}

export type { IDoctorCheckbox };
