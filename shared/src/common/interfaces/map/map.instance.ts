import { MapKey } from '~/common/enums';

interface ICoordsSet {
  [MapKey.MAX_LAT]: number;
  [MapKey.MAX_LNG]: number;
  [MapKey.MIN_LNG]: number;
  [MapKey.MIN_LAT]: number;
  [MapKey.USER_ID]: string | undefined;
}

export type { ICoordsSet };
