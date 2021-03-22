import { IDiagnosis } from 'common/interfaces';
import { Http } from 'services/http/http.service';
import {
  ApiPath,
  DiagnosesApiPath,
  HttpMethod,
  ContentType,
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

  public getAllByUserId(userId: string): Promise<IDiagnosis[]> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.DIAGNOSES}${
        DiagnosesApiPath.USERS
      }/${userId}`,
      {
        method: HttpMethod.GET,
      },
    );
  }

  public create(userId: string, diagnosis: string): Promise<IDiagnosis> {
    const payload = {
      diagnosis,
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
