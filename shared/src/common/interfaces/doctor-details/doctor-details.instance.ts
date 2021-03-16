import { IUser } from '../user';
import { DoctorDetailsKey, DoctorKey } from '~/common/enums';
import { ISpecialization } from '../specialization';

interface IDoctorDetails extends IUser {
  doctor: {
    [DoctorKey.DEPARTMENT]: string;
    [DoctorKey.ABOUT]: string;
  };
  [DoctorDetailsKey.SPECIALIZATIONS]: ISpecialization[];
}

export type { IDoctorDetails };
