import { IDoctor } from '../doctor';
import { IDocument } from '../document';
import { DoctorExtendedKey } from '~/common/enums';
import { IClinicExtended } from '../clinic-extended';
import { IProfession } from '../profession';

interface IDoctorExtended extends IDoctor {
  [DoctorExtendedKey.CLINIC]: IClinicExtended
  [DoctorExtendedKey.DOCUMENT]: IDocument
  [DoctorExtendedKey.PROFESSION]: IProfession
}

export type { IDoctorExtended };
