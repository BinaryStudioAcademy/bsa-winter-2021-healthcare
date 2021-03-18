import { CityKey } from '~/common/enums';

interface ICity {
  [CityKey.ID]: string;
  [CityKey.NAME]: string;
  [CityKey.CREATED_AT]: string;
  [CityKey.UPDATED_AT]: string;
}

export type { ICity };
