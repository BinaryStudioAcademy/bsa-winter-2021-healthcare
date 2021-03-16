import { geolocationRepository } from '~/data/repositories';
import { IGeolocation } from '~/common/interfaces';

class GeolocationService {
  public createLocation(geolocation: IGeolocation): Promise<IGeolocation>{
    return geolocationRepository.createGeolocation(geolocation);
  }
}

export { GeolocationService };
