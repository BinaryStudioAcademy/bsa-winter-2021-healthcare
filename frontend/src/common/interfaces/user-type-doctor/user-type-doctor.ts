import { IUser } from '../user';
import { IDoctorWithClinic } from '../doctor-clinic';

interface IUserTypeDoctor extends IUser {
  doctor: IDoctorWithClinic
}

export type { IUserTypeDoctor }
