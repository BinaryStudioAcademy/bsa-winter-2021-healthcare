import { Http } from 'services/http/http.service';
import { IMap } from 'common/interfaces';
import { MapApiPath } from 'common/enums/api';
import { ContentType, HttpMethod } from 'common/enums';
import { ApiPath } from 'common/enums/api';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class MapApi {
  #http: Http;
  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  public sendSelectedCoords(
    payload: Partial<IMap>,
  ): Promise<IMap> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.MAP}${MapApiPath.SELECT_AREA}`,
      {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload,
      },
    );
  }
}

export { MapApi };
