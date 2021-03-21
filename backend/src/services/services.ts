import { LogLevel } from '~/common/enums';
import { AppAsyncStorage } from '~/common/types';
import { AsyncLocalStorage } from './async-storage/async-storage.service';
import { Document } from './document-service/document-service.service';
import { Auth } from './auth/auth.service';
import { User } from './user-service/user-service.service';
import { Clinic } from './clinic-service/clinic-service.service';
import { Geolocation } from './geolocation/geolocation.service';
import { Logger } from './logger/logger.service';
import { Appointment } from './appointment/appoitment-service.service';

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

export {
  appAsyncStorage,
  logger,
  document,
  auth,
  user,
  clinic,
  geolocation,
  appointment,
};
