import { GeolocationKey } from '~/common/enums';

interface IGeolocation {
  [GeolocationKey.ID]:string
  [GeolocationKey.LAT]: number;
  [GeolocationKey.LNG]: number;
  [GeolocationKey.USER_ID]: string;
  [GeolocationKey.CREATED_AT]: string;
  [GeolocationKey.UPDATED_AT]: string;
}

export type { IGeolocation };
