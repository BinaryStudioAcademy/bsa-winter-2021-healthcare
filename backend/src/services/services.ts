import { LogLevel } from '~/common/enums';
import { AppAsyncStorage } from '~/common/types';
import { AsyncLocalStorage } from './async-storage/async-storage.service';
<<<<<<< HEAD
import { AuthService } from './auth/auth.service';
import { UserService } from './user-service/user-service.service';
import { ClinicService } from './clinic-service/clinic-service.service';
import { DocumentService } from './document-service/document-service.service';
import { GeolocationService } from './geolocation/geolocation.service';
=======
import { Auth } from './auth/auth.service';
import { User } from './user-service/user-service.service';
import { Clinic } from './clinic-service/clinic-service.service';
import { Geolocation } from './geolocation/geolocation.service';
>>>>>>> development
import { Logger } from './logger/logger.service';

const appAsyncStorage = new AsyncLocalStorage<AppAsyncStorage>();

const logger = new Logger({
  logLevel: LogLevel.DEBUG,
  asyncStorage: appAsyncStorage,
});

<<<<<<< HEAD
const authService = new AuthService();
const userService = new UserService();
const clinicService = new ClinicService();
const documentService = new DocumentService();
const geolocationService = new GeolocationService();
=======
const auth = new Auth();
const user = new User();
const clinic = new Clinic();
const geolocation = new Geolocation();
>>>>>>> development

export {
  appAsyncStorage,
  logger,
<<<<<<< HEAD
  authService,
  userService,
  clinicService,
  geolocationService,
  documentService,
=======
  auth,
  user,
  clinic,
  geolocation,
>>>>>>> development
};
