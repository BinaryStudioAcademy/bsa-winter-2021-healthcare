import { DoctorKey } from '~/common/enums';

interface IDoctor {
  [DoctorKey.ID]: string;
  [DoctorKey.ABOUT]: string;
  [DoctorKey.CREATED_AT]: string;
  [DoctorKey.UPDATED_AT]: string;
}

export type { IDoctor };
