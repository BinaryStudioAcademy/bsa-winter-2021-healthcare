import { IDoctor } from '../doctor';
import { ISpecialization } from '../specialization';
import { UserKey, DoctorDetailsKey} from '~/common/enums';

interface IDoctorDetails extends IDoctor {
  [UserKey.NAME]: string
  [UserKey.SURNAME]: string
  [UserKey.IMAGE_PATH]:string
  [UserKey.PHONE]:string
  [DoctorDetailsKey.SPECIALIZATIONS]: [ISpecialization]
}

export type { IDoctorDetails }
