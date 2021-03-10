import {
  ApiPath,
  ContentType,
  UsersApiPath,
} from 'healthcare-shared/common/enums';
import { ENV } from 'common/enums';
import { Http } from '../http/http.service';
import { HttpMethod } from 'common/enums';
import { IUser } from 'healthcare-shared';

type Constructor = {
  http: Http;
};

class UserApi {
  #http: Http;
  #apiPrefix: string | undefined;
  constructor({ http }: Constructor) {
    this.#http = http;
    this.#apiPrefix = ENV.API_PATH;
  }
  // public loginUser(payload: IUserLoginPayload): Promise<IUser> {
  //   return this.#http.load(UsersApiPath, {
  //     method: HttpMethod.POST,
  //     payload,
  //   });
  // }
  public registerUser(payload: IUser): Promise<IUser> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.USERS}${UsersApiPath.ROOT}`,
      {
        method: HttpMethod.POST,
        payload: { ...payload },
        contentType: ContentType.JSON,
      },
    );
  }
  public editUser(id: string | undefined, payload: IUser): Promise<IUser> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.USERS}/${id}`, {
      method: HttpMethod.PUT,
      payload: { ...payload },
      contentType: ContentType.JSON,
    });
  }
  public getUser(id: string): Promise<IUser> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.USERS}/${id}`, {
      method: HttpMethod.GET,
    });
  }
  public deleteUser(id: string): Promise<IUser> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.USERS}/${id}`, {
      method: HttpMethod.DELETE,
    });
  }
  public getUsers(): Promise<IUser[]> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.USERS}${UsersApiPath.ROOT}`,
      {
        method: HttpMethod.GET,
      },
    );
  }
}
export { UserApi };
