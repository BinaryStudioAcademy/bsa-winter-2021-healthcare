import { UserRepository } from './user-repository';
import { ClinicRepository } from './clinic-repository';
import { GeolocationRepository } from './geolocation-repository';
import { DoctorRepository } from './doctor-repository';

const userRepository = new UserRepository();
const clinicRepository = new ClinicRepository();
const geolocationRepository = new GeolocationRepository();
const doctorRepository = new DoctorRepository();

export {
  userRepository,
  clinicRepository,
  geolocationRepository,
  doctorRepository,
};
