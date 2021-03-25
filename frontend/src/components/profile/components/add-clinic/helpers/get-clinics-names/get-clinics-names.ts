import { IClinic } from 'common/interfaces';

const getClinicsName = (clinics: IClinic[]): string[] => {
  return clinics.map((clinic) => clinic.name);
};

export { getClinicsName };
