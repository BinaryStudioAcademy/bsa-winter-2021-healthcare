import { IDoctor } from '../doctor';
import { IDocument } from '../document';
import { DoctorExtendedKey } from '~/common/enums';
import { IClinicWithCity } from '../clinic-with-city';
import { IProfession } from '../profession';

interface IDoctorExtended extends IDoctor {
  [DoctorExtendedKey.CLINIC]: IClinicWithCity
  [DoctorExtendedKey.DOCUMENT]: IDocument
  [DoctorExtendedKey.PROFESSION]: IProfession
}

export type { IDoctorExtended };
