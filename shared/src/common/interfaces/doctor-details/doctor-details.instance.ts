import { IUser } from '../user';
import { DoctorDetailsKey } from '~/common/enums';
import { ISpecialization } from '../specialization';
import { IDoctor } from '../doctor';

interface IDoctorDetails extends IUser {
  doctor: IDoctor;
  [DoctorDetailsKey.SPECIALIZATIONS]: ISpecialization[];
}

export type { IDoctorDetails };
