import { IDoctor } from '../doctor';
import { IClinic } from '../clinic';

interface IDoctorWithClinic extends IDoctor {
  clinics: IClinic
}

export type { IDoctorWithClinic }
