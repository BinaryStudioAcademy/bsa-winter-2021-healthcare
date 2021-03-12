import { ClinicType } from '~/common/enums'

interface IClinic {
  id: string;
  name: string;
  address: string;
  imagePath: string,
  clinicType: ClinicType;
  createdAt: string;
  updatedAt: string;
}

export type { IClinic };
