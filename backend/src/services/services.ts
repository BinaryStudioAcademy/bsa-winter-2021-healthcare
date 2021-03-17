import { LogLevel } from '~/common/enums';
import { AppAsyncStorage } from '~/common/types';
import { AsyncLocalStorage } from './async-storage/async-storage.service';
import { AuthService } from './auth/auth.service';
import { UserService } from './user-service/user-service.service';
import { ClinicService } from './clinic-service/clinic-service.service';
import { GeolocationService } from './geolocation/geolocation.service';
import { Logger } from './logger/logger.service';

const appAsyncStorage = new AsyncLocalStorage<AppAsyncStorage>();

const logger = new Logger({
  logLevel: LogLevel.DEBUG,
  asyncStorage: appAsyncStorage,
});

const authService = new AuthService();
const userService = new UserService();
const clinicService = new ClinicService();
const geolocationService = new GeolocationService();

export {
  appAsyncStorage,
  logger,
  authService,
  userService,
  clinicService,
  geolocationService,
};
