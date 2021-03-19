import { DoctorType } from 'common/enums';

const doctorSpecialtiesToReadable = {
  [DoctorType.PEDIATRICIAN]: 'Pediatrician',
  [DoctorType.DENTIST]: 'Dentist',
  [DoctorType.DERMATOLOGIST]: 'Dermatologist',
  [DoctorType.SURGEON]: 'Surgeon',
  [DoctorType.ENDOCRINOLOGIST]: 'Endocrinologist',
};

export { doctorSpecialtiesToReadable };
