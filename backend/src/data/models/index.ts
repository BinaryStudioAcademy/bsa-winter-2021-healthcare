import { sequelize } from '../db/connection';
import createClinicModel from './clinic';
import createDoctorModel from './doctor';
import createDocumentModel from './document';
import createAppointmentModel from './appointment';
import createNotificationModel from './notification';
import createMessageModel from './message';
import createUserModel from './user';
import createDiagnosisModel from './diagnosis';
import associate from '../db/associations';

const AppointmentModel = createAppointmentModel(sequelize);
const ClinicModel = createClinicModel(sequelize);
const DiagnosisModel = createDiagnosisModel(sequelize);
const DoctorModel = createDoctorModel(sequelize);
const DocumentModel = createDocumentModel(sequelize);
const MessageModel = createMessageModel(sequelize);
const NotificationModel = createNotificationModel(sequelize);
const UserModel = createUserModel(sequelize);

associate({
  Appointment: AppointmentModel,
  Clinic: ClinicModel,
  Diagnosis: DiagnosisModel,
  Doctor: DoctorModel,
  Document: DocumentModel,
  Message: MessageModel,
  Notification: NotificationModel,
  User: UserModel
});

export {
  AppointmentModel,
  ClinicModel,
  DiagnosisModel,
  DoctorModel,
  DocumentModel,
  MessageModel,
  NotificationModel,
  UserModel
};
