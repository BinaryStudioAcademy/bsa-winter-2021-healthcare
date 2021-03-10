import { IUser } from '../user';
import { IDoctorWithClinic } from '../doctor-clinic';

interface IUserTypeDoctor extends IUser {
  doctors: IDoctorWithClinic
}

export type { IUserTypeDoctor }
