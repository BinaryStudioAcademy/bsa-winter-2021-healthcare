import { sequelize } from '../db/connection';
import createClinicModel from './clinic';
import createDoctorModel from './doctor';
import createDocumentModel from './document';
import createAppointmentModel from './appointment';
import createNotificationModel from './notification';
import createMessageModel from './message';

const ClinicModel = createClinicModel(sequelize);
const DoctorModel = createDoctorModel(sequelize);
const DocumentModel = createDocumentModel(sequelize);
const AppointmentModel = createAppointmentModel(sequelize);
const NotificationModel = createNotificationModel(sequelize);
const MessageModel = createMessageModel(sequelize);

export {
  ClinicModel,
  DoctorModel,
  DocumentModel,
  AppointmentModel,
  NotificationModel,
  MessageModel
};
