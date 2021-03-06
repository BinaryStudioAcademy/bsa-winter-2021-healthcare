import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName } from '~/common/enums';
import { IClinic } from '~/common/interfaces';

interface ClinicInstance extends IClinic, Model {}

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
