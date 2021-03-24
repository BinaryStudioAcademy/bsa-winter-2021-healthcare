import { CityModel } from '../models';
import { ICity } from '~/common/interfaces';

class CityRepository {

  public getAll(): Promise<ICity[]> {
    return CityModel.findAll();
  }

  public createCity(cityName: Partial<ICity>): Promise<ICity> {
    return CityModel.create(cityName);
  }
}

export { CityRepository };
