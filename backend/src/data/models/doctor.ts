import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';

interface DoctorInstance extends Model {
  department: string;
  roomNumber: number;
  about: string,
  createdAt: Date;
  updatedAt: Date;
}

export default (orm: Sequelize): ModelCtor<DoctorInstance> => {
  const Doctor = orm.define<DoctorInstance>('doctor', {
    department: {
      allowNull: false,
      type: DataTypes.STRING
    },
    roomNumber: {
      type: DataTypes.INTEGER,
      unique: true
    },
    about: {
      type: DataTypes.TEXT
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});

  return Doctor;
};
