import { sequelize } from '../db/connection';
import createClinicModel from './clinic';
import createDoctorModel from './doctor';
import createDocumentModel from './document';
import createAppointmentModel from './appointment';
import createNotificationModel from './notification';
import createMessageModel from './message';
import createUserModel from './user';
import createDiagnosisModel from './diagnosis';
import createGeolocationModel from './geolocation';
import createPermissionModel from './permission';
import createUserPermissionModel from './user-permission';
import createCityModel from './city';
import associate from '../db/associations';
import createSpecializationModel from './specializations';
import createUserSpecializationModel from './user-specialization';
import createProfessionModel from './profession';

const AppointmentModel = createAppointmentModel(sequelize);
const CityModel = createCityModel(sequelize);
const ClinicModel = createClinicModel(sequelize);
const DiagnosisModel = createDiagnosisModel(sequelize);
const DoctorModel = createDoctorModel(sequelize);
const DocumentModel = createDocumentModel(sequelize);
const MessageModel = createMessageModel(sequelize);
const NotificationModel = createNotificationModel(sequelize);
const UserModel = createUserModel(sequelize);
const GeolocationModel = createGeolocationModel(sequelize);
const PermissionModel = createPermissionModel(sequelize);
const UserPermissionModel = createUserPermissionModel(sequelize);
const SpecializationModel = createSpecializationModel(sequelize);
const UserSpecializationModel = createUserSpecializationModel(sequelize);
const ProfessionModel = createProfessionModel(sequelize);

associate({
  Appointment: AppointmentModel,
  City: CityModel,
  Clinic: ClinicModel,
  Diagnosis: DiagnosisModel,
  Doctor: DoctorModel,
  Document: DocumentModel,
  Message: MessageModel,
  Notification: NotificationModel,
  User: UserModel,
  Geolocation: GeolocationModel,
  Permission: PermissionModel,
  UserPermission: UserPermissionModel,
  Specialization: SpecializationModel,
  UserSpecialization: UserSpecializationModel,
  Profession: ProfessionModel,
});

export {
  AppointmentModel,
  CityModel,
  ClinicModel,
  DiagnosisModel,
  DoctorModel,
  DocumentModel,
  MessageModel,
  NotificationModel,
  UserModel,
  GeolocationModel,
  PermissionModel,
  UserPermissionModel,
  SpecializationModel,
  UserSpecializationModel,
  ProfessionModel,
};
