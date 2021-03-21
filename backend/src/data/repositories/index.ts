import { UserRepository } from './user-repository';
import { ClinicRepository } from './clinic-repository';
import { DocumentRepository } from './document-repository';
import { GeolocationRepository } from './geolocation-repository';
import { DoctorRepository } from './doctor-repository';

const documentRepository = new DocumentRepository();
const userRepository = new UserRepository();
const clinicRepository = new ClinicRepository();
const geolocationRepository = new GeolocationRepository();
const doctorRepository = new DoctorRepository();

export {
  userRepository,
  clinicRepository,
  documentRepository,
  geolocationRepository,
  doctorRepository,
};
