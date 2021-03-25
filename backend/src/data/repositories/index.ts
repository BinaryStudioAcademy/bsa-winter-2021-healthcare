import { Appointment } from './appointment.repository';
import { User } from './user.repository';
import { Clinic } from './clinic.repository';
import { Geolocation } from './geolocation.repository';
import { Diagnosis } from './diagnosis.repository';
import { Document } from './document.repository';
import { Notification } from './notification.repository';
import { Doctor } from './doctor.repository';
import { Permission } from './permission.repository';
import { City } from './city.repository';

const user = new User();
const clinic = new Clinic();
const geolocation = new Geolocation();
const diagnosis = new Diagnosis();
const document = new Document();
const doctorRepository = new Doctor();
const appointment = new Appointment();
const notification = new Notification();
const permissionRepository = new Permission();
const cityRepository = new City();

export {
  user,
  clinic,
  geolocation,
  diagnosis,
  document,
  doctorRepository,
  notification,
  permissionRepository,
  appointment,
  cityRepository,
};
