import { IDiagnosis, IDiagnosisPayload } from 'common/interfaces';
import { Http } from 'services/http/http.service';
import { ApiPath, HttpMethod, ContentType } from 'common/enums';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class Diagnosis {
  #http: Http;
  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  public getAllDiagnoses(): Promise<IDiagnosis[]> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.DIAGNOSES}`, {
      method: HttpMethod.GET,
    });
  }

  public create(
    userId: string,
    diagnosis: string,
    description: string,
  ): Promise<IDiagnosis> {
    const payload: Partial<IDiagnosisPayload> = {
      diagnosis,
      description,
      userId,
    };

    return this.#http.load(`${this.#apiPrefix}${ApiPath.DIAGNOSES}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload,
    });
  }
}

export { Diagnosis };
