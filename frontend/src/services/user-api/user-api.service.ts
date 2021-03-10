import { Http } from '../http/http.service';
import { HttpMethod, AppRoute } from 'common/enums';
import { IUserTypeDoctor } from 'common/interfaces';

type Constructor = {
  http: Http;
  apiPrefix: string
};

class UserApi {
  #http: Http;
  #apiPrefix: string;
  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }

  public getDoctors(): Promise<IUserTypeDoctor[]> {
    return this.#http.load(`${this.#apiPrefix}${AppRoute.DOCTORS}`, {
      method: HttpMethod.GET
    });
  }
}
export { UserApi };
