import { MapKey } from '~/common/enums';

interface IMap {
  [MapKey.MAX_LAT]: number;
  [MapKey.MAX_LNG]: number;
  [MapKey.MIN_LNG]: number;
  [MapKey.MIN_LAT]: number;
}

export type { IMap };
