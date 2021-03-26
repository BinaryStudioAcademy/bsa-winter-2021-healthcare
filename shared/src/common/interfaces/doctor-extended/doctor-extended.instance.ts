import { IProfession } from '~/common/interfaces';
import { IDoctor } from '../doctor';
import { IClinic } from '../clinic';
import { IDocument } from '../document';
import { DoctorExtendedKey } from '~/common/enums';

interface IDoctorExtended extends IDoctor {
  [DoctorExtendedKey.CLINIC]: IClinic
  [DoctorExtendedKey.DOCUMENT]: IDocument
  [DoctorExtendedKey.PROFESSION]: IProfession
}

export type { IDoctorExtended };
