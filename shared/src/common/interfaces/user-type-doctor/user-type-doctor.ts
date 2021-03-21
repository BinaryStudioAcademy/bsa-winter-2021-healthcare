import { IUser } from '../user';
import { IDoctorExtended } from '../doctor-extended';
import { UserTypeDoctorKey } from '~/common/enums';

interface IUserTypeDoctor extends IUser {
  [UserTypeDoctorKey.DOCTOR]: IDoctorExtended
}

export type { IUserTypeDoctor };
