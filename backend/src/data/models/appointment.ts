import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize';

enum Type {
  ONLINE = 'online',
  OFFLINE = 'offline'
}

interface AppointmentInstance extends Model {
  date: Date;
  type: Type;
  cost: number;
  subject: string;
  createdAt: Date;
  updatedAt: Date;
}

export default (orm: Sequelize): ModelCtor<AppointmentInstance> => {
  const Appointment = orm.define<AppointmentInstance>('appointment', {
    date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    type: {
      allowNull: false,
      type: DataTypes.ENUM('online', 'offline')
    },
    cost: DataTypes.FLOAT,
    subject: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});

  return Appointment;
};
