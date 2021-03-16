import { Http } from 'services/http/http.service';
import { IClinic } from 'common/interfaces';
import { ContentType, HttpMethod } from 'common/enums';
import { ApiPath, ClinicsApiPath } from 'common/enums';


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

  public addClinic(payload: Partial<IClinic>): Promise<IClinic> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.CLINIC}${ClinicsApiPath.ROOT}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload,
    });
  }

  public deleteClinic(id:string): Promise<IClinic[]> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.CLINIC}/${id}`, {
      method: HttpMethod.DELETE,
    });
  }
  
  public getClinics(): Promise<IClinic[]> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.CLINIC}${ClinicsApiPath.ROOT}`, {
      method: HttpMethod.GET,
    });
  }
}

export { ClinicApi };
