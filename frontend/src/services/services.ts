import { Http } from './http/http.service';
import { UserApi } from './user-api/user-api.services';

const http = new Http();
const userApi = new UserApi({
  http,
});

export { http, userApi };
