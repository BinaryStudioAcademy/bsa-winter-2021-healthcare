import { Http } from '../http/http.service';
import { IUser } from 'healthcare-shared/common/interfaces';
import { HttpMethod } from 'common/enums';
import { AppRoute } from 'common/enums';

type Constructor = {
  http: Http;
};

const baseUrl = 'http://localhost:3001/api/v1/'

class UserApi {
  #http: Http;
  constructor({ http }: Constructor) {
    this.#http = http;
  }

  public getDoctors(): Promise<IUser[]> {
    return this.#http.load(baseUrl + AppRoute.DOCTORS, {
      method: HttpMethod.GET
    });
  }
}
export { UserApi };
