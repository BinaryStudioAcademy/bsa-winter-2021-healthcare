import { ContentType, UsersApiPath, ApiPath } from 'common/enums';
import { Http } from '../http/http.service';
import { HttpMethod } from 'common/enums';
import { IUser } from 'common/interfaces';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class UserApi {
  #http: Http;
  #apiPrefix: string;
  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }
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
  public editUser(id: string, payload: IUser): Promise<IUser> {
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
  public deleteUser(id: string): Promise<boolean> {
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
