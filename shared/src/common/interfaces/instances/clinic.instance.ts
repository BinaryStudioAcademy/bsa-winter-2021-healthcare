import { ClinicType } from '~/common/enums'

export interface IClinic {
  name: string;
  address: string;
  imagePath: string,
  clinicType: ClinicType;
  createdAt: Date;
  updatedAt: Date;
}
