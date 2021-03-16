import { LogLevel } from '~/common/enums';
import { AppAsyncStorage } from '~/common/types';
import { AsyncLocalStorage } from './async-storage/async-storage.service';
import { AuthService } from './auth/auth.service';
import { UserService } from './user-service/user-service.service';
import { Logger } from './logger/logger.service';
import { ClinicService } from './clinic/clinic-service.service';

const appAsyncStorage = new AsyncLocalStorage<AppAsyncStorage>();

const logger = new Logger({
  logLevel: LogLevel.DEBUG,
  asyncStorage: appAsyncStorage,
});

const authService = new AuthService();
const userService = new UserService();
const clinicService = new ClinicService();

export { appAsyncStorage, logger, authService, userService, clinicService };
