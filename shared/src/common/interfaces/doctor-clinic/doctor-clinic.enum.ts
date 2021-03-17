import { IDoctor } from '../doctor';
import { IClinic } from '../clinic';
import { DoctorClinicKey } from '~/common/enums';

interface IDoctorWithClinic extends IDoctor {
  [DoctorClinicKey.CLINIC]: IClinic;
}

export type { IDoctorWithClinic };
