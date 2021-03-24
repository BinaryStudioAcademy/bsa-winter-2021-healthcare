/* eslint-disable no-console */
import { GeolocationModel } from '../models';
import { IGeolocation } from '~/common/interfaces';

class Geolocation {
  public getAll(): Promise<IGeolocation[]> {
    return GeolocationModel.findAll();
  }

  public createGeolocation(geolocation: IGeolocation): Promise<IGeolocation> {
    return GeolocationModel.create(geolocation);
  }

  public getByUserId(userId: string): Promise<IGeolocation | null> {
    return GeolocationModel.findOne({ where: { userId } });
  }

  public async updateById(id: string, data: IGeolocation): Promise<IGeolocation> {
    const [, [updatedGeolocation]] = await GeolocationModel.update(data, {
      where: { id },
      returning: true,
    });

    return updatedGeolocation;
  }
}

export { Geolocation };
