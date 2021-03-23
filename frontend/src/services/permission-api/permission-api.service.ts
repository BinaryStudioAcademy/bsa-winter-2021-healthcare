import { Http } from '../http/http.service';
import { HttpMethod, ApiPath, ContentType } from 'common/enums';
import { IPermission } from 'common/interfaces';

type Constructor = {
  http: Http;
  apiPrefix: string;
};

class PermissionApi {
  #http: Http;
  #apiPrefix: string;
  constructor({ http, apiPrefix }: Constructor) {
    this.#http = http;
    this.#apiPrefix = apiPrefix;
  }
  public addPermissionForUser(payload: {
    userId: string;
    permissionId: string;
  }): Promise<IPermission[]> {
    return this.#http.load(`${this.#apiPrefix}${ApiPath.PERMISSIONS}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload,
    });
  }
  public getPermissions(): Promise<IPermission[]> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.PERMISSIONS}`,
      {
        method: HttpMethod.GET,
      },
    );
  }
  public deletePermissionForUser(payload: {
    userId: string;
    permissionId: string;
  }): Promise<boolean> {
    return this.#http.load(
      `${this.#apiPrefix}${ApiPath.PERMISSIONS}/${
        payload.userId
      }`,
      {
        method: HttpMethod.DELETE,
        contentType: ContentType.JSON,
        payload,
      },
    );
  }
}
export { PermissionApi };
