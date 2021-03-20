import { UserRepository } from './user-repository';
import { ClinicRepository } from './clinic-repository';
import { GeolocationRepository } from './geolocation-repository';
import { Diagnosis } from './diagnosis.repository';

const userRepository = new UserRepository();
const clinicRepository = new ClinicRepository();
const geolocationRepository = new GeolocationRepository();
const diagnosis = new Diagnosis();

export { userRepository, clinicRepository, geolocationRepository, diagnosis };
