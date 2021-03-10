import { Http } from './http/http.service';
import { UserApi } from './user-api/user-api.service';
import { ENV } from 'common/enums';

const http = new Http();

const userApi = new UserApi({
  http,
  apiPrefix: (ENV.API_PATH as string)
});

export { http, userApi };
