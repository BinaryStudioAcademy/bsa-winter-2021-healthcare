import { IUser, IDoctor, IClinic } from 'common/interfaces';

interface IDoctorWithClinic extends IDoctor {
  Clinic: IClinic
}
export interface IUserTypeDoctor extends IUser {
  Doctor: IDoctorWithClinic
}
