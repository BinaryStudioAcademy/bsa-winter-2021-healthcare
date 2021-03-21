import { LogLevel } from '~/common/enums';
import { AppAsyncStorage } from '~/common/types';
import { AsyncLocalStorage } from './async-storage/async-storage.service';
import { Document } from './document-service/document-service.service';
import { Auth } from './auth/auth.service';
import { User } from './user-service/user-service.service';
import { Clinic } from './clinic-service/clinic-service.service';
import { Geolocation } from './geolocation/geolocation.service';
import { Notification } from './notification/notification.service';
import { Logger } from './logger/logger.service';
import { UploadFile } from './upload-file/upload-file.service';

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
const notification = new Notification();
const uploadFile = new UploadFile();

export {
  appAsyncStorage,
  logger,
  document,
  auth,
  user,
  clinic,
  geolocation,
  notification,
  uploadFile,
};
