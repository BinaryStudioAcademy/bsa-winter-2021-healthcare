import { Http } from 'services/http/http.service';
import { IUserLoginPayload } from 'healthcare-shared/common/interfaces';
import { AuthApiPath } from 'healthcare-shared/common/enums/api';
import { HttpMethod } from 'common/enums';

type Constructor = {
  http: Http;
};

class AuthApi {
  #http: Http;

  constructor({ http }: Constructor) {
    this.#http = http;
  }

  // TODO: change promise type to IUser, when add needed repositories.
  public loginUser(payload: IUserLoginPayload): Promise<string> {
    return this.#http.load(AuthApiPath.LOGIN, {
      method: HttpMethod.POST,
      payload,
    });
  }
}

export { AuthApi };
