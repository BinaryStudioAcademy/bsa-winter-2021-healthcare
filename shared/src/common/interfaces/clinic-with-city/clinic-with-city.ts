import { IClinic } from '../clinic';
import { ClinicWithCityKey } from '~/common/enums';
import { ICity } from '../city';

interface IClinicWithCity extends IClinic {
  [ClinicWithCityKey.CITY]: ICity
}

export type { IClinicWithCity };
