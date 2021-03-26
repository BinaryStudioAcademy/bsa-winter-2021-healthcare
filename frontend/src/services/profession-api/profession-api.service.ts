import { IProfession } from 'common/interfaces';
import { Http } from 'services/http/http.service';
import { ApiPath, HttpMethod, ContentType } from 'common/enums';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class ProfessionApi {
  #http: Http;
  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  public getAllProfessions(): Promise<IProfession[]> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.PROFESSION}`, {
      method: HttpMethod.GET,
    });
  }

  public addSelectedProfession(id: string, userId: string): Promise<IProfession> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.PROFESSION}/${id}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: {
        userId,
      },
    });
  }
}

export { ProfessionApi };
