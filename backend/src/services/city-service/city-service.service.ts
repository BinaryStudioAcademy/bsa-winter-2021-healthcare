import { cityRepository } from '~/data/repositories';
import { ICity } from '~/common/interfaces';

class City {
  public getAllCities(): Promise<ICity[]> {
    return cityRepository.getAll();
  }

  public createCity(cityName: Partial<ICity>): Promise<ICity> {
    return cityRepository.createCity(cityName);
  }
}

export { City };
