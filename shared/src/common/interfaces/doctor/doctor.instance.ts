import { DoctorKey } from '~/common/enums';
import { IClinic } from '../clinic';

interface IDoctor {
  [DoctorKey.ID]: string;
  [DoctorKey.ABOUT]: string;
  [DoctorKey.CLINIC]:IClinic;
  [DoctorKey.CREATED_AT]: string;
  [DoctorKey.UPDATED_AT]: string;
}

export type { IDoctor };
