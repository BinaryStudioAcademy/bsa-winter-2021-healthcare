import { Http } from './http/http.service';
import { AuthApi } from './auth-api/auth-api.service';
import { Storage } from './storage/storage.service';

const http = new Http();

const authApi = new AuthApi({
  http,
});

const storage = new Storage({
  storage: localStorage
});

export { http, authApi, storage };
