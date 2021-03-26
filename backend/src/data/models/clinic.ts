import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName, TableName, ClinicType } from '~/common/enums';
import { IClinic } from '~/common/interfaces';

interface ClinicInstance extends IClinic, Model {}

const createClinicModel = (orm: Sequelize): ModelCtor<ClinicInstance> => {
  const Clinic = orm.define<ClinicInstance>(
    ModelName.CLINIC,
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      imagePath: {
        type: DataTypes.STRING,
      },
      clinicType: {
        allowNull: false,
        type: DataTypes.ENUM(ClinicType.PRIVATE, ClinicType.STATE),
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: TableName.CLINICS,
    },
  );

  return Clinic;
};

export default createClinicModel;
