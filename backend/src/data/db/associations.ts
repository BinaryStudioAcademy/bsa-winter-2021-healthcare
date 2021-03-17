import { DbModels } from '~/common/types';
import { ModelAlias, ForeingKey } from '~/common/enums';

const associate = ({
  Appointment,
  City,
  Clinic,
  Diagnosis,
  Doctor,
  Document,
  Message,
  Notification,
  User,
  Geolocation,
  Permission,
  UserPermission,
  Specialization,
  UserSpecialization,
}: DbModels): void => {
  User.hasOne(Doctor, {
    foreignKey: ForeingKey.USER_ID,
    as: ModelAlias.DOCTOR,
  });
  User.hasOne(Geolocation, {
    foreignKey: ForeingKey.USER_ID,
    as: ModelAlias.GEOLOCATION,
  });
  User.hasMany(Appointment, {
    foreignKey: ForeingKey.USER_ID,
    as: ModelAlias.APPOINTMENTS,
  });
  User.hasMany(Message, {
    foreignKey: ForeingKey.USER_ID,
    as: ModelAlias.MESSAGES,
  });
  User.hasMany(Notification, {
    foreignKey: ForeingKey.USER_ID,
    as: ModelAlias.NOTIFICATIONS,
  });
  User.hasMany(Diagnosis, {
    foreignKey: ForeingKey.USER_ID,
    as: ModelAlias.DIAGNOSIS,
  });
  User.belongsToMany(Permission, {
    through: UserPermission,
    foreignKey: ForeingKey.USER_ID,
    as: ModelAlias.PERMISSIONS,
  });
  User.belongsToMany(Specialization, {
    through: UserSpecialization,
    foreignKey: ForeingKey.USER_ID,
    as: ModelAlias.SPECIALIZATIONS,
  });

  Doctor.hasMany(Appointment, {
    foreignKey: ForeingKey.DOCTOR_ID,
    as: ModelAlias.APPOINTMENTS,
  });
  Doctor.belongsTo(Clinic, {
    foreignKey: ForeingKey.CLINIC_ID,
    as: ModelAlias.CLINIC,
  });
  Doctor.belongsTo(Document, {
    foreignKey: ForeingKey.DOCUMENT_ID,
    as: ModelAlias.DOCUMENT,
  });
  Doctor.belongsTo(User, {
    foreignKey: ForeingKey.USER_ID,
    as: ModelAlias.USER,
  });

  Appointment.belongsTo(Doctor, {
    foreignKey: ForeingKey.DOCTOR_ID,
    as: ModelAlias.DOCTOR,
  });
  Appointment.belongsTo(User, {
    foreignKey: ForeingKey.USER_ID,
    as: ModelAlias.USER,
  });

  Document.hasOne(Doctor, {
    foreignKey: ForeingKey.DOCUMENT_ID,
    as: ModelAlias.DOCTOR,
  });

  City.hasMany(Clinic, {
    foreignKey: ForeingKey.CITY_ID,
    as: ModelAlias.CLINICS,
  });

  Clinic.hasMany(Doctor, {
    foreignKey: ForeingKey.CLINIC_ID,
    as: ModelAlias.DOCTORS,
  });
  Clinic.belongsTo(City, {
    foreignKey: ForeingKey.CITY_ID,
    as: ModelAlias.CITY,
  });

  Message.belongsTo(User, {
    foreignKey: ForeingKey.USER_ID,
    as: ModelAlias.USER,
  });

  Notification.belongsTo(User, {
    foreignKey: ForeingKey.USER_ID,
    as: ModelAlias.USER,
  });

  Diagnosis.belongsTo(User, {
    foreignKey: ForeingKey.USER_ID,
    as: ModelAlias.USER,
  });

  Geolocation.belongsTo(User, {
    foreignKey: ForeingKey.USER_ID,
    as: ModelAlias.USER,
  });

  Permission.belongsToMany(User, {
    through: UserPermission,
    foreignKey: ForeingKey.PERMISSION_ID,
    as: ModelAlias.USERS,
  });
  Specialization.belongsToMany(User, {
    through: UserSpecialization,
    foreignKey: ForeingKey.SPECIALIZATION_ID,
    as: ModelAlias.USERS});
};

export default associate;
