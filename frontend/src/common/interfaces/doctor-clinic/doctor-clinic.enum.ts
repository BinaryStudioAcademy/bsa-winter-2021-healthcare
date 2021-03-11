import { IDoctor } from '../doctor';
import { IClinic } from '../clinic';

interface IDoctorWithClinic extends IDoctor {
  clinic: IClinic
}

export type { IDoctorWithClinic }
