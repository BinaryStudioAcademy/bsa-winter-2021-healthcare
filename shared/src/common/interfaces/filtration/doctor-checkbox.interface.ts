import { DoctorType, ClinicType } from '~/common/enums';

interface IDoctorCheckbox {
  [DoctorType.PEDIATRICIAN]: boolean;
  [DoctorType.ENDOCRINOLOGIST]: boolean;
  [DoctorType.DENTIST]: boolean;
  [DoctorType.SURGEON]: boolean;
  [DoctorType.DERMATOLOGIST]:boolean;
  [ClinicType.PRIVATE]: boolean;
  [ClinicType.STATE]: boolean;
}

export type { IDoctorCheckbox };
