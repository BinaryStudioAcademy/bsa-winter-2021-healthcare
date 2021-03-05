import { sequelize } from '../db/connection';
import Clinic from './clinic';
import Doctor from './doctor';
import Document from './document';
import Appointment from './appointment';
import Notification from './notification';
import Message from './message';

const ClinicModel = Clinic(sequelize);
const DoctorModel = Doctor(sequelize);
const DocumentModel = Document(sequelize);
const AppointmentModel = Appointment(sequelize);
const NotificationModel = Notification(sequelize);
const MessageModel = Message(sequelize);

export {
    ClinicModel,
    DoctorModel,
    DocumentModel,
    AppointmentModel,
    NotificationModel,
    MessageModel
};
