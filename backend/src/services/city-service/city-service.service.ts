import { city } from '~/data/repositories';
import { ICity } from '~/common/interfaces';

class City {
  public getAllCities(): Promise<ICity[]> {
    return city.getAll();
  }

  public createCity(cityName: Partial<ICity>): Promise<ICity> {
    return city.createCity(cityName);
  }
}

export { City };
