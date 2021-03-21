import { UserRepository } from './user-repository';
import { ClinicRepository } from './clinic-repository';
import { GeolocationRepository } from './geolocation-repository';
import { NotificationRepository } from './notifications-repository';

const userRepository = new UserRepository();
const clinicRepository = new ClinicRepository();
const geolocationRepository = new GeolocationRepository();
const notificationRepository = new NotificationRepository();

export {
  userRepository,
  clinicRepository,
  geolocationRepository,
  notificationRepository,
};
