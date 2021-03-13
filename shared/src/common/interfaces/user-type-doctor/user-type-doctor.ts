import { IUser } from '../user';
import { IDoctorWithClinic } from '../doctor-clinic';
import { UserTypeDoctorKey } from '~/common/enums';

interface IUserTypeDoctor extends IUser {
  [UserTypeDoctorKey.DOCTOR]: IDoctorWithClinic
}

export type { IUserTypeDoctor }
