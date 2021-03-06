import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName } from '~/common/enums';

interface DoctorInstance extends Model {
  department: string;
  roomNumber: number;
  about: string,
  createdAt: Date;
  updatedAt: Date;
}

export default (orm: Sequelize): ModelCtor<DoctorInstance> => {
  const Doctor = orm.define<DoctorInstance>(ModelName.DOCTOR, {
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
