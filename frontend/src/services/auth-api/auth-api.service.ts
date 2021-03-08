import { Http } from 'services/http/http.service';
import { IUserLoginPayload } from 'common/interfaces';
import { AuthApiPath } from 'common/enums/api';
import { HttpMethod } from 'common/enums';
import { LoginResponse } from 'common/types/responses';

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
    return this.#http.load(AuthApiPath.LOGIN, {
      method: HttpMethod.POST,
      payload,
    });
  }
}

export { AuthApi };
