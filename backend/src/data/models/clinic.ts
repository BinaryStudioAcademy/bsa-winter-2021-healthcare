import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName } from '~/common/enums';

enum ClinicType {
  PRIVATE = 'private',
  STATE = 'state'
}

interface ClinicInstance extends Model {
  name: string;
  address: string;
  imagePath: string,
  clinicType: ClinicType;
  createdAt: Date;
  updatedAt: Date;
}

export default (orm: Sequelize): ModelCtor<ClinicInstance> => {
  const Clinic = orm.define<ClinicInstance>(ModelName.CLINIC, {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    imagePath: {
      allowNull: false,
      type: DataTypes.STRING
    },
    clinicType: {
      allowNull: false,
      type: DataTypes.ENUM('private', 'state')
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});

  return Clinic;
};
