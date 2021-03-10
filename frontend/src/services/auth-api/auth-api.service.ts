import { Http } from 'services/http/http.service';
import { IUserLoginPayload } from 'common/interfaces';
import { AuthApiPath } from 'common/enums/api';
import { ContentType, ENV, HttpMethod } from 'common/enums';
import { LoginResponse } from 'common/types/responses';
import { ApiPath } from 'common/enums/api';

type Constructor = {
  http: Http;
};

class AuthApi {
  #http: Http;

  constructor({ http }: Constructor) {
    this.#http = http;
  }

  // TODO: change promise type to IUser, when add needed repositories.
  public loginUser(payload: IUserLoginPayload): Promise<LoginResponse> {
    return this.#http.load(`${ENV.API_PATH || ''}${ApiPath.AUTH}${AuthApiPath.LOGIN}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload,
    });
  }
}

export { AuthApi };
