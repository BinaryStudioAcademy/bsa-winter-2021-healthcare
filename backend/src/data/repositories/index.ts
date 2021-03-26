import { Appointment } from './appointment.repository';
import { User } from './user.repository';
import { Clinic } from './clinic.repository';
import { Geolocation } from './geolocation.repository';
import { Diagnosis } from './diagnosis.repository';
import { Document } from './document.repository';
import { Notification } from './notification.repository';
import { Doctor } from './doctor.repository';
import { Permission } from './permission.repository';
import { Messages } from './messages.repository';

const user = new User();
const clinic = new Clinic();
const geolocation = new Geolocation();
const diagnosis = new Diagnosis();
const document = new Document();
const doctor = new Doctor();
const appointment = new Appointment();
const notification = new Notification();
const permission = new Permission();
const messages = new Messages();

export {
  user,
  clinic,
  geolocation,
  diagnosis,
  document,
  doctor,
  notification,
  permission,
  appointment,
  messages,
};
