import { Http } from 'services/http/http.service';
import { HttpMethod, ApiPath, ContentType } from 'common/enums';
import { ICity } from 'common/interfaces';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class CityApi {
  #http: Http;
  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  public addCity(payload: Partial<ICity>): Promise<ICity> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.CITIES}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload,
    });
  }

  public getCities(): Promise<ICity[]> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.CITIES}`,
      {
        method: HttpMethod.GET,
      },
    );
  }
}

export { CityApi };
