import { DoctorKey } from '~/common/enums';

interface IDoctorRegisterPayload {
  [DoctorKey.USER_ID]: string;
  [DoctorKey.ABOUT]: string;
}

export type { IDoctorRegisterPayload };
