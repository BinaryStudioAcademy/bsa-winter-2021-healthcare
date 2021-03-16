import { GeolocationModel } from '../models';
import { IGeolocation } from '~/common/interfaces';

class GeolocationRepository {
  public createGeolocation(geolocation: IGeolocation): Promise<IGeolocation> {
    return GeolocationModel.create(geolocation);
  }
}

export { GeolocationRepository };
