import { LogLevel } from '~/common/enums';
import { AppAsyncStorage } from '~/common/types';
import { AsyncLocalStorage } from './async-storage/async-storage.service';
import { Auth } from './auth/auth.service';
import { User } from './user-service/user-service.service';
import { Clinic } from './clinic-service/clinic-service.service';
import { Geolocation } from './geolocation/geolocation.service';
import { Doctor } from './doctor-service/doctor-service.service';
import { Logger } from './logger/logger.service';

const appAsyncStorage = new AsyncLocalStorage<AppAsyncStorage>();

const logger = new Logger({
  logLevel: LogLevel.DEBUG,
  asyncStorage: appAsyncStorage,
});

const auth = new Auth();
const user = new User();
const clinic = new Clinic();
const geolocation = new Geolocation();
const doctor = new Doctor();

export {
  appAsyncStorage,
  logger,
  auth,
  user,
  clinic,
  geolocation,
  doctor,
};
