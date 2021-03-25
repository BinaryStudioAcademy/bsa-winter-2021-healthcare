import { DoctorKey } from '~/common/enums';

interface IDoctor {
  [DoctorKey.ID]: string;
  [DoctorKey.ABOUT]: string;
  [DoctorKey.CREATED_AT]: string;
  [DoctorKey.UPDATED_AT]: string;
  [DoctorKey.PROFESSION_ID]?: string;
  [DoctorKey.CLINIC_ID]?: string;
  [DoctorKey.DOCUMENT_ID]?: string;
}

export type { IDoctor };
