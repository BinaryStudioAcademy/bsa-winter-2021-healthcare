import { IDiagnosis, IDiagnosisPayload } from 'common/interfaces';
import { Http } from 'services/http/http.service';
import {
  ApiPath,
  HttpMethod,
  ContentType,
  DiagnosesApiPath,
} from 'common/enums';

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

  public getAllDiagnoses(userId: string): Promise<IDiagnosis[]> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.DIAGNOSES}${
        DiagnosesApiPath.USERS
      }/${userId}`,
      {
        method: HttpMethod.GET,
      },
    );
  }

  public create(payload: Partial<IDiagnosisPayload>): Promise<IDiagnosis> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.DIAGNOSES}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload,
    });
  }
}

export { Diagnosis };
