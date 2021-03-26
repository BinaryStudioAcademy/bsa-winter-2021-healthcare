import { ENV } from 'common/enums';
import { Http } from './http/http.service';
import { AuthApi } from './auth-api/auth-api.service';
import { UserApi } from './user-api/user-api.service';
import { Storage } from './storage/storage.service';
import { ClinicApi } from './clinic-api/clinic-api.service';
import { DocumentApi } from './document-api/document-api.service';
import { Notification } from './notification/notification.service';
import { Geolocation } from './geolocation/geolocation.service';
import { AppointmentApi } from './appointment-api/appointment-api.service';
import { Diagnosis } from './diagnosis/diagnosis.service';
import { UploadFile } from './upload-file/upload-file.service';
import { MapApi } from './map-api/map-api.service';
import { PermissionApi } from './permission-api/permission-api.service';
import { ProfessionApi } from './profession-api/profession-api.service';
import { CityApi } from './city-api/city-api.service';
import { DoctorApi } from './doctor-api/doctor-api.service';
import { Messages } from './messages/messages.service';

const http = new Http();

const authApi = new AuthApi({
  http,
  apiPrefix: ENV.API_PATH,
});

const userApi = new UserApi({
  http,
  apiPrefix: ENV.API_PATH,
});

const clinicApi = new ClinicApi({
  http,
  apiPrefix: ENV.API_PATH,
});

const documentApi = new DocumentApi({
  http,
  apiPrefix: ENV.API_PATH,
});

const storage = new Storage({
  storage: localStorage,
});

const geolocation = new Geolocation({
  http,
  apiPrefix: ENV.API_PATH,
});

const notification = new Notification({
  http,
  apiPrefix: ENV.API_PATH,
});

const diagnosis = new Diagnosis({
  http,
  apiPrefix: ENV.API_PATH,
});

const uploadFile = new UploadFile({
  http,
  apiPrefix: ENV.API_PATH,
});

const mapApi = new MapApi({
  http,
  apiPrefix: ENV.API_PATH,
});

const messagesApi = new Messages({
  http,
  apiPrefix: ENV.API_PATH,
});

const permissionApi = new PermissionApi({
  http,
  apiPrefix: ENV.API_PATH,
});

const cityApi = new CityApi({
  http,
  apiPrefix: ENV.API_PATH,
});

const doctorApi = new DoctorApi({
  http,
  apiPrefix: ENV.API_PATH,
});
const appointment = new AppointmentApi({
  http,
  apiPrefix: ENV.API_PATH,
});

const professionApi = new ProfessionApi({
  http,
  apiPrefix: ENV.API_PATH,
});

export {
  http,
  authApi,
  userApi,
  storage,
  notification,
  clinicApi,
  documentApi,
  geolocation,
  appointment,
  diagnosis,
  uploadFile,
  mapApi,
  permissionApi,
  professionApi,
  cityApi,
  doctorApi,
  messagesApi,
};
