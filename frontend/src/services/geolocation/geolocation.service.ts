import { IGeolocation } from 'common/interfaces';
import { Http } from '../http/http.service';
import {
  ApiPath,
  GeolocationsApiPath,
  HttpMethod,
  ContentType,
} from 'common/enums';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class Geolocation {
  #http: Http;
  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  public getByUserId(userId: string | undefined): Promise<IGeolocation> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.GEOLOCATIONS}${
        GeolocationsApiPath.USERS
      }/${userId}`,
      {
        method: HttpMethod.GET,
      },
    );
  }

  public updateGeolocation(
    id: string | undefined,
  ): Promise<IGeolocation> | void {
    navigator.geolocation?.getCurrentPosition((position) => {
      const payload: Partial<IGeolocation> = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      return this.#http.load(
        `${this.#apiPrefix}${ApiPath.GEOLOCATIONS}/${id}`,
        {
          method: HttpMethod.PUT,
          contentType: ContentType.JSON,
          payload,
        },
      );
    });
  }

  public addGeolocation(
    userId: string | undefined,
  ): Promise<IGeolocation> | void {
    navigator.geolocation?.getCurrentPosition((position) => {
      const payload: Partial<IGeolocation> = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        userId: userId,
      };

      return this.#http.load(`${this.#apiPrefix}${ApiPath.GEOLOCATIONS}`, {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload,
      });
    });
  }
}

export { Geolocation };
