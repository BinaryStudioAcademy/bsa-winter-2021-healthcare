import { IClinic } from '../clinic';
import { ClinicExtendedKey } from '~/common/enums';
import { ICity } from '../city';

interface IClinicExtended extends IClinic {
  [ClinicExtendedKey.CITY]: ICity
}

export type { IClinicExtended };
