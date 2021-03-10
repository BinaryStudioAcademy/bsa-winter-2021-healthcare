export * from './http/http.service';
export * from './user-api/user-api.service';
import { ENV } from 'common/enums';
import { Http } from './http/http.service';
import { AuthApi } from './auth-api/auth-api.service';
import { UserApi } from './user-api/user-api.service';
import { Storage } from './storage/storage.service';

const http = new Http();

const authApi = new AuthApi({
  http,
  apiPrefix: ENV.API_PATH,
});

const storage = new Storage({
  storage: localStorage
});
const userApi = new UserApi({
  http,
});

export { http, userApi, authApi, storage };
