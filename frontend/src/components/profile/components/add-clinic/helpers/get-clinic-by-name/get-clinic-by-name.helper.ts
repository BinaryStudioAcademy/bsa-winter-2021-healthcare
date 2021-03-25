import { IClinic } from 'common/interfaces';

const getClinicByName = (
  clinicName: string,
  clinics: IClinic[],
): IClinic | null => {
  return clinics.find((clinic: IClinic) => clinic.name === clinicName) ?? null;
};

export { getClinicByName };
