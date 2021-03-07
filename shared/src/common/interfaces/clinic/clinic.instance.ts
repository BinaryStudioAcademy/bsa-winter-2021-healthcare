import { ClinicType } from '~/common/enums'

interface IClinic {
  name: string;
  address: string;
  imagePath: string,
  clinicType: ClinicType;
  createdAt: Date;
  updatedAt: Date;
}

export type { IClinic };
