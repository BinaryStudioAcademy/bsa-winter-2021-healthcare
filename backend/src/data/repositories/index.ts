<<<<<<< HEAD
import { UserRepository } from './user-repository';
import { ClinicRepository } from './clinic-repository';
import { DocumentRepository } from './document-repository';
import { GeolocationRepository } from './geolocation-repository';
import { AppointmentRepository } from './appointment-repository';

const documentRepository = new DocumentRepository();
const userRepository = new UserRepository();
const clinicRepository = new ClinicRepository();
const geolocationRepository = new GeolocationRepository();
const appointmentRepository = new AppointmentRepository();

export {
  userRepository,
  clinicRepository,
  documentRepository,
  geolocationRepository,
  appointmentRepository,
};
=======
import { User } from './user-repository';
import { Clinic } from './clinic-repository';
import { Geolocation } from './geolocation-repository';
import { Diagnosis } from './diagnosis.repository';
import { Document } from './document-repository';
import { DoctorRepository } from './doctor-repository';

const user = new User();
const clinic = new Clinic();
const geolocation = new Geolocation();
const diagnosis = new Diagnosis();
const document = new Document();
const doctorRepository = new DoctorRepository();

export { user, clinic, geolocation, diagnosis, document, doctorRepository };
>>>>>>> development
