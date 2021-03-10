import { Http } from 'services/http/http.service';
import { IRegisterPayload } from 'common/interfaces';
import { AuthApiPath } from 'common/enums/api';
import { ContentType, HttpMethod } from 'common/enums';
import { RegistrationResponse } from 'common/types/responses';
import { ApiPath } from 'common/enums/api';

type Constructor = {
  http: Http;
  apiPrefix: string| undefined;
};

class Registration {
  #http: Http;
  #apiPrefix: string | undefined;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  // TODO: change promise type to IUser, when add needed repositories.
  public registrationUser(payload: Partial<IRegisterPayload>): Promise<RegistrationResponse> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.AUTH}${AuthApiPath.SIGNUP}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload,
    });
  }
}

export { Registration };
