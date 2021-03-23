import { Http } from 'services/http/http.service';
import { HttpMethod, ApiPath, ContentType } from 'common/enums';
import { IClinic } from 'common/interfaces';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class DoctorApi {
  #http: Http;
  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  public addDoctorToClinic(payload: Partial<IClinic>): Promise<IClinic> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.DOCTOR}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload,
    });
  }
}

export { DoctorApi };
