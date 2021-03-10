import { ENV } from 'common/enums';
import { Http } from './http/http.service';
import { Registration } from './registration/registration.service';

const http = new Http();

const RegistrationApi = new Registration({
  http,
  apiPrefix: ENV.API_PATH,
});

export { http, RegistrationApi };
