import { ENV } from 'common/enums';
import { Http } from './http/http.service';
import { AuthApi } from './auth-api/auth-api.service';
import { UserApi } from './user-api/user-api.service';
import { Storage } from './storage/storage.service';
import { ClinicApi } from './clinic-api/clinic-api.service';

const http = new Http();

const authApi = new AuthApi({
  http,
  apiPrefix: ENV.API_PATH
});

const userApi = new UserApi({
  http,
  apiPrefix: ENV.API_PATH
});

const clinicApi = new ClinicApi({
  http,
  apiPrefix:ENV.API_PATH
})

const storage = new Storage({
  storage: localStorage
});

export { http, authApi, userApi, clinicApi, storage };
