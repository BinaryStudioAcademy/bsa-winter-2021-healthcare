import { Http } from './http/http.service';
import { AuthApi } from './auth-api/auth-api.service';

const http = new Http();

const authApi = new AuthApi({
  http,
});

export { http, authApi };
