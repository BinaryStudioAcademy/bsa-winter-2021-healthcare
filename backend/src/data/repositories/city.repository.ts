import { CityModel } from '../models';
import { ICity } from '~/common/interfaces';

class City {

  public getAll(): Promise<ICity[]> {
    return CityModel.findAll();
  }

  public createCity(cityName: Partial<ICity>): Promise<ICity> {
    return CityModel.create(cityName);
  }
}

export { City };
