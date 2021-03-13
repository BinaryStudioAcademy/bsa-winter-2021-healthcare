import { Http } from '../http/http.service';
import { HttpMethod, ContentType, UsersApiPath, UserType, ApiPath } from 'common/enums';
import { IUserTypeDoctor } from 'common/interfaces';
import { IUser } from 'common/interfaces';

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

  public getDoctors(): Promise<IUserTypeDoctor[]> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.USERS}${UsersApiPath.TYPE}/${UserType.DOCTOR}`, {
      method: HttpMethod.GET
    });
  }
}
export { UserApi };
