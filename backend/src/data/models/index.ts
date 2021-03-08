import { sequelize } from '../db/connection';
import createClinicModel from './clinic';
import createDoctorModel from './doctor';
import createDocumentModel from './document';
import createAppointmentModel from './appointment';
import createNotificationModel from './notification';
import createMessageModel from './message';
import createUserModel from './user';
import createDiagnosisModel from './diagnosis';

const ClinicModel = createClinicModel(sequelize);
const DoctorModel = createDoctorModel(sequelize);
const DocumentModel = createDocumentModel(sequelize);
const AppointmentModel = createAppointmentModel(sequelize);
const NotificationModel = createNotificationModel(sequelize);
const MessageModel = createMessageModel(sequelize);
const UserModel = createUserModel(sequelize);
const DiagnosisModel = createDiagnosisModel(sequelize);

UserModel.hasOne(DoctorModel);
UserModel.hasMany(AppointmentModel);
UserModel.hasMany(MessageModel);
UserModel.hasMany(NotificationModel);
UserModel.hasMany(DiagnosisModel);

DoctorModel.hasMany(AppointmentModel);
DoctorModel.belongsTo(ClinicModel);
DoctorModel.belongsTo(DocumentModel);
DoctorModel.belongsTo(UserModel);

AppointmentModel.belongsTo(DoctorModel);
AppointmentModel.belongsTo(UserModel);

DocumentModel.hasOne(DoctorModel);

ClinicModel.hasMany(DoctorModel);

MessageModel.belongsTo(UserModel);

NotificationModel.belongsTo(UserModel);

DiagnosisModel.belongsTo(UserModel);

export {
  ClinicModel,
  DoctorModel,
  DocumentModel,
  AppointmentModel,
  NotificationModel,
  MessageModel,
  UserModel
};
