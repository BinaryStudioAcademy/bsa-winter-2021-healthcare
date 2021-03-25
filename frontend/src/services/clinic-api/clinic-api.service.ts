import { Http } from 'services/http/http.service';
import { HttpMethod, ApiPath, ClinicsApiPath, ContentType } from 'common/enums';
import { IClinic, IClinicPayload } from 'common/interfaces';

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

  public addClinic(payload: Partial<IClinicPayload>): Promise<IClinic> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.CLINICS}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload,
    });
  }

  public getClinics(): Promise<IClinic[]> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.CLINICS}${ClinicsApiPath.ROOT}`,
      {
        method: HttpMethod.GET,
      },
    );
  }
}

export { ClinicApi };
