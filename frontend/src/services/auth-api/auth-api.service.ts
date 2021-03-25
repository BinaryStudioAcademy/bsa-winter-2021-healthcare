import { Http } from 'services/http/http.service';
import { IUserLoginPayload, IRegisterPayload } from 'common/interfaces';
import { AuthApiPath } from 'common/enums/api';
import { ContentType, HttpMethod } from 'common/enums';
import { LoginResponse } from 'common/types/responses';
import { ApiPath } from 'common/enums/api';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class AuthApi {
  #http: Http;
  #apiPrefix: string;

  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  public loginUser(
    payload: Partial<IUserLoginPayload>,
  ): Promise<LoginResponse> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.AUTH}${AuthApiPath.LOGIN}`,
      {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload,
        hasAuth: false,
      },
    );
  }
  public registrationUser(
    payload: Partial<IRegisterPayload>,
  ): Promise<LoginResponse> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.AUTH}${AuthApiPath.SIGNUP}`,
      {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload,
        hasAuth: false,
      },
    );
  }
}

export { AuthApi };
