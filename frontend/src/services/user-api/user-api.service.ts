import { Http } from '../http/http.service';
import { HttpMethod, ContentType, UsersApiPath, UserType, ApiPath } from 'common/enums';
import { IUser, IEditUserPayload, IUserTypeDoctor, IDoctorDetails, IDoctorFiltrationPayload } from 'common/interfaces';
import * as queryString from 'query-string';

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
  public registerUser(payload: Partial<IUser>): Promise<IUser> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.USERS}${UsersApiPath.ROOT}`,
      {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload,
      },
    );
  }
  public editUser(id: string, payload: IEditUserPayload): Promise<IUser> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.USERS}/${id}`, {
      method: HttpMethod.PUT,
      contentType: ContentType.JSON,
      payload,
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

  public getUser(id:string): Promise<IUser> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.USERS}/${id}`,
      {
        method: HttpMethod.GET,
      },
    );
  }

  public getDoctors(filter?: IDoctorFiltrationPayload): Promise<IUserTypeDoctor[]> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.USERS}${UsersApiPath.TYPE}/${
        UserType.DOCTOR}${(filter ? `?${queryString.stringify(filter)}` : '')}`,
      {
        method: HttpMethod.GET,
      },
    );
  }

  public getDoctorDetails(id:string): Promise<IDoctorDetails> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.USERS}${UsersApiPath.DOCTOR_DETAILS}/${id}`, {
      method: HttpMethod.GET,
    });
  }

  public getCurrentUser(): Promise<IUser> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.USERS}${UsersApiPath.CURRENT_USER}`,
      {
        method: HttpMethod.GET,
      },
    );
  }

  public filterUsersByName(name: string): Promise<IUser[]> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.USERS}${UsersApiPath.FILTER_BY_NAME}/${name}`,
      {
        method: HttpMethod.GET,
      },
    );
  }
}

export { UserApi };
