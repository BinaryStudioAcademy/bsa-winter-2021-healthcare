import { Http } from '../http/http.service';
import { HttpMethod, ContentType, UsersApiPath, UserType, ApiPath } from 'common/enums';
import { IUser, IEditUserPayload, IUserTypeDoctor, IDoctorDetails } from 'common/interfaces';

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
  public editUser(id: string, payload: IEditUserPayload): Promise<IUser[]> {
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

  public getDoctors(): Promise<IUserTypeDoctor[]> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.USERS}${UsersApiPath.TYPE}/${
        UserType.DOCTOR
      }`,
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
}
export { UserApi };
