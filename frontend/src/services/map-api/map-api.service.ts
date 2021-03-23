import { Http } from 'services/http/http.service';
import { ICoordsSet } from 'common/interfaces';
import { ApiPath, NotificationApiPath } from 'common/enums/api';
import { ContentType, HttpMethod } from 'common/enums';

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
    payload: Partial<ICoordsSet>,
  ): Promise<ICoordsSet> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.NOTIFICATIONS}${NotificationApiPath.COVID}`,
      {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload,
      },
    );
  }
}

export { MapApi };
