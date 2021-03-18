import { IDoctor } from '../doctor';
import { IClinic } from '../clinic';
import { IDocument } from '../document';
import { DoctorExtendedKey } from '~/common/enums';

interface IDoctorExtended extends IDoctor {
  [DoctorExtendedKey.CLINIC]: IClinic
  [DoctorExtendedKey.DOCUMENT]: IDocument
}

export type { IDoctorExtended }
