import { sequelize } from '../db/connection';
import createClinicModel from './clinic';
import createDoctorModel from './doctor';
import createDocumentModel from './document';
import createAppointmentModel from './appointment';
import createNotificationModel from './notification';
import createMessageModel from './message';
import createUserModel from './user';
import createDiagnosisModel from './diagnosis';
import createPermissionModel from './permission';
import createUserPermissionModel from './user_permission';
import associate from '../db/associations';

const AppointmentModel = createAppointmentModel(sequelize);
const ClinicModel = createClinicModel(sequelize);
const DiagnosisModel = createDiagnosisModel(sequelize);
const DoctorModel = createDoctorModel(sequelize);
const DocumentModel = createDocumentModel(sequelize);
const MessageModel = createMessageModel(sequelize);
const NotificationModel = createNotificationModel(sequelize);
const UserModel = createUserModel(sequelize);
const PermissionModel = createPermissionModel(sequelize);
const UserPermissionModel = createUserPermissionModel(sequelize);

associate({
  Appointment: AppointmentModel,
  Clinic: ClinicModel,
  Diagnosis: DiagnosisModel,
  Doctor: DoctorModel,
  Document: DocumentModel,
  Message: MessageModel,
  Notification: NotificationModel,
  User: UserModel,
  Permission: PermissionModel,
  UserPermission: UserPermissionModel
});

export {
  AppointmentModel,
  ClinicModel,
  DiagnosisModel,
  DoctorModel,
  DocumentModel,
  MessageModel,
  NotificationModel,
  UserModel,
  PermissionModel,
  UserPermissionModel
};
