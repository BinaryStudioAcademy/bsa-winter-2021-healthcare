import { UserRepository } from './user-repository';
import { ClinicRepository } from './clinic-repository';
import { GeolocationRepository } from './geolocation-repository';
import { PermissionRepository } from './permission-repository';

const userRepository = new UserRepository();
const clinicRepository = new ClinicRepository();
const geolocationRepository = new GeolocationRepository();
const permissionRepository = new PermissionRepository();

export {
  userRepository,
  clinicRepository,
  geolocationRepository,
  permissionRepository,
};
