import { ClinicType } from '~/common/enums'

interface IClinic {
  name: string;
  address: string;
  imagePath: string,
  clinicType: ClinicType;
  createdAt: string;
  updatedAt: string;
}

export type { IClinic };
