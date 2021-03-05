import { Http } from '../http/http.service';
import { UserState as IUser } from 'common/interfaces';
import { HttpMethod } from 'common/enums';
// import { UsersApiPath } from 'common/enums';

type Constructor = {
  http: Http;
};

class UserApi {
  #http: Http;
  constructor({ http }: Constructor) {
    this.#http = http;
  }
    public loginUser(payload: IUserLoginPayload): Promise<IUser> {
      return this.#http.load(UsersApiPath, {
        method: HttpMethod.POST,
        payload,
      });
    }
    public registerUser(payload: IUserRegisterPayload): Promise<IUser> {
      return this.#http.load(UsersApiPath, {
        method: HttpMethod.POST,
        payload,
      });
    }
    public getUser(id: IUser[UserKey.ID]): Promise<IUser> {
      return this.#http.load(`${UsersApiPath}${id}`, {
        method: HttpMethod.GET,
      });
    }
  public getUsers(nmb: number): string {
    return this.#http.load(UsersApiPath, {
      method: HttpMethod.GET,
    });
  }
}
export { UserApi };
