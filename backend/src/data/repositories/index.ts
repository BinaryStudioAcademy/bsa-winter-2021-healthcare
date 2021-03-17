import { UserRepository } from './user-repository';
import { ClinicRepository } from './clinic-repository';
import { GeolocationRepository } from './geolocation-repository';

const userRepository = new UserRepository();
const clinicRepository = new ClinicRepository();
const geolocationRepository = new GeolocationRepository();

export {
  userRepository,
  clinicRepository,
  geolocationRepository,
};
