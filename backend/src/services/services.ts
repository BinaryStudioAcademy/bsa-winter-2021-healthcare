import { LogLevel } from '~/common/enums';
import { AppAsyncStorage } from '~/common/types';
import { AsyncLocalStorage } from './async-storage/async-storage.service';
import { Document } from './document/document.service';
import { Auth } from './auth/auth.service';
import { User } from './user-service/user-service.service';
import { Clinic } from './clinic-service/clinic-service.service';
import { Geolocation } from './geolocation/geolocation.service';
import { Notification } from './notification/notification.service';
import { Doctor } from './doctor/doctor.service';
import { Logger } from './logger/logger.service';
import { Appointment } from './appointment/appoitment-service.service';
import { Diagnosis } from './diagnosis/diagnosis.service';
import { UploadFile } from './upload-file/upload-file.service';
import { Permission } from './permission/permission.service';
import { Profession } from './profession/profession.service';
import { City } from './city-service/city-service.service';
import { Message } from './messages/message.service';

const appAsyncStorage = new AsyncLocalStorage<AppAsyncStorage>();

const logger = new Logger({
  logLevel: LogLevel.DEBUG,
  asyncStorage: appAsyncStorage,
});

const document = new Document();
const auth = new Auth();
const user = new User();
const clinic = new Clinic();
const geolocation = new Geolocation();
const appointment = new Appointment();
const diagnosis = new Diagnosis();
const uploadFile = new UploadFile();
const notification = new Notification();
const doctor = new Doctor();
const permission = new Permission();
const profession = new Profession();
const city = new City();
const message = new Message();

export {
  appAsyncStorage,
  logger,
  auth,
  user,
  clinic,
  geolocation,
  appointment,
  uploadFile,
  diagnosis,
  document,
  notification,
  doctor,
  permission,
  profession,
  city,
  message,
};
