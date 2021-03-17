import { GeolocationModel } from '../models';
import { IGeolocation } from '~/common/interfaces';

class GeolocationRepository {
  public createGeolocation(geolocation: IGeolocation): Promise<IGeolocation> {
    return GeolocationModel.create(geolocation);
  }

  public getByUserId(userId: string): Promise<IGeolocation | null> {
    return GeolocationModel.findOne({ where: { userId } });
  }

  public async updateById(id: string, data: IGeolocation): Promise<IGeolocation> {
    const result = await GeolocationModel.update(data, {
      where: { id },
      returning: true,
    });

    return result[1][0];
  }
}

export { GeolocationRepository };
