import { IClinic } from 'common/interfaces';
import { Http } from 'services/http/http.service';
import {
  ContentType,
  HttpMethod,
  ApiPath,
  ClinicsApiPath
} from 'common/enums';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class ClinicApi {
  #http: Http;
  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  public getClinics(): Promise<IClinic[]> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.CLINICS}${ClinicsApiPath.ROOT}`, {
      method: HttpMethod.GET,
      contentType: ContentType.JSON
    });
  }
}

export { ClinicApi };
