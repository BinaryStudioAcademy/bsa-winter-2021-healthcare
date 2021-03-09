import { DbModels } from '~/common/types';

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
  User.hasOne(Doctor);
  User.hasMany(Appointment);
  User.hasMany(Message);
  User.hasMany(Notification);
  User.hasMany(Diagnosis);

  Doctor.hasMany(Appointment);
  Doctor.belongsTo(Clinic);
  Doctor.belongsTo(Document);
  Doctor.belongsTo(User);

  Appointment.belongsTo(Doctor);
  Appointment.belongsTo(User);

  Document.hasOne(Doctor);

  Clinic.hasMany(Doctor);

  Message.belongsTo(User);

  Notification.belongsTo(User);

  Diagnosis.belongsTo(User);
};

export default associate;
