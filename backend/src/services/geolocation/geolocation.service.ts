import { geolocation as geolocationRepository } from '~/data/repositories';
import { IGeolocation } from '~/common/interfaces';

class Geolocation {
  public createGeolocation(geolocation: IGeolocation): Promise<IGeolocation> {
    return geolocationRepository.createGeolocation(geolocation);
  }

  public getByUserId(userId: string): Promise<IGeolocation | null> {
    return geolocationRepository.getByUserId(userId);
  }

  public async updateGeolocation(id: string, data: IGeolocation): Promise<IGeolocation> {
    return geolocationRepository.updateById(id, data);
  }
}

export { Geolocation };
