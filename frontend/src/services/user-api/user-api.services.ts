import { ApiPath, UsersApiPath } from 'healthcare-shared/common/enums';
import { ENV } from 'common/enums';
import { Http } from '../http/http.service';
import { HttpMethod } from 'common/enums';
import { IUser } from 'healthcare-shared';

type Constructor = {
  http: Http;
};

class UserApi {
  #http: Http;
  #apiPrefix:string|undefined;
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
      console.log(payload)
      return this.#http.load(`${this.#apiPrefix}${ApiPath.USERS}${UsersApiPath.ROOT}`, {
        method: HttpMethod.POST,
        payload:JSON.stringify(payload),
      });
    }
    // public getUser(id: IUser[UserKey.ID]): Promise<IUser> {
    //   return this.#http.load(`${UsersApiPath}${id}`, {
    //     method: HttpMethod.GET,
    //   });
    // }
  public getUsers(): Promise<IUser>  {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.USERS}`, {
      method: HttpMethod.GET,
    });
  }
}
export { UserApi };
