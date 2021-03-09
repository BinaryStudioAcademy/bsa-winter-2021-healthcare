import { Http } from '../http/http.service';
import { HttpMethod, AppRoute } from 'common/enums';
import { ENV } from 'common/enums';
import { IUserTypeDoctor } from 'components/doctors-search/common/interfaces'

type Constructor = {
  http: Http;
  apiPrefix: typeof ENV.API_PATH
};

class UserApi {
  #http: Http;
  #apiPrefix: typeof ENV.API_PATH;
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
