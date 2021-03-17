import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize';
import { ModelName, TableName, AppointmentType } from '~/common/enums';
import { IAppointment } from '~/common/interfaces';

interface AppointmentInstance extends IAppointment, Model {}

const createAppointmentModel = (
  orm: Sequelize,
): ModelCtor<AppointmentInstance> => {
  const Appointment = orm.define<AppointmentInstance>(
    ModelName.APPOINTMENT,
    {
      date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      type: {
        allowNull: false,
        type: DataTypes.ENUM(AppointmentType.ONLINE, AppointmentType.OFFLINE),
      },
      cost: DataTypes.FLOAT,
      subject: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: TableName.APPOINTMENTS,
    },
  );

  return Appointment;
};

export default createAppointmentModel;
