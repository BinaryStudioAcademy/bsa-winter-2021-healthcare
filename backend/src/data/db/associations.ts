import { DbModels } from '~/common/types';
import { ModelAlias, ForeingKeys } from '~/common/enums';

const associate = ({
  Appointment,
  Clinic,
  Diagnosis,
  Doctor,
  Document,
  Message,
  Notification,
  User
}: DbModels): void => {
  User.hasOne(Doctor, {foreignKey: ForeingKeys.USER_ID, as: ModelAlias.DOCTORS});
  User.hasMany(Appointment, {foreignKey: ForeingKeys.USER_ID, as: ModelAlias.APPOINTMENTS});
  User.hasMany(Message, {foreignKey: ForeingKeys.USER_ID, as: ModelAlias.MESSAGES});
  User.hasMany(Notification, {foreignKey: ForeingKeys.USER_ID, as: ModelAlias.NOTIFICATIONS});
  User.hasMany(Diagnosis, {foreignKey: ForeingKeys.USER_ID, as: ModelAlias.DIAGNOSES});

  Doctor.hasMany(Appointment, {foreignKey: ForeingKeys.DOCTOR_ID, as: ModelAlias.APPOINTMENTS});
  Doctor.belongsTo(Clinic, {foreignKey: ForeingKeys.CLINIC_ID, as: ModelAlias.CLINICS});
  Doctor.belongsTo(Document, {foreignKey: ForeingKeys.DOCUMENT_ID, as: ModelAlias.DOCUMENTS});
  Doctor.belongsTo(User, {foreignKey: ForeingKeys.USER_ID, as: ModelAlias.USERS});

  Appointment.belongsTo(Doctor, {foreignKey: ForeingKeys.DOCTOR_ID, as: ModelAlias.DOCTORS});
  Appointment.belongsTo(User, {foreignKey: ForeingKeys.USER_ID, as: ModelAlias.USERS});

  Document.hasOne(Doctor, {foreignKey: ForeingKeys.DOCUMENT_ID, as: ModelAlias.DOCTORS});

  Clinic.hasMany(Doctor, {foreignKey: ForeingKeys.CLINIC_ID, as: ModelAlias.DOCTORS});

  Message.belongsTo(User, {foreignKey: ForeingKeys.USER_ID, as: ModelAlias.USERS});

  Notification.belongsTo(User, {foreignKey: ForeingKeys.USER_ID, as: ModelAlias.USERS});

  Diagnosis.belongsTo(User, {foreignKey: ForeingKeys.USER_ID, as: ModelAlias.USERS});
};

export default associate;
