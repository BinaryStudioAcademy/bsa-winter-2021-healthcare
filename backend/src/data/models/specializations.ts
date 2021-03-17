import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName, TableName } from '~/common/enums';
import { ISpecialization } from '~/common/interfaces';

interface SpecializationInstance extends ISpecialization, Model {}

const createSpecializationModel =  (orm: Sequelize): ModelCtor<SpecializationInstance> => {
  const Specialization = orm.define<SpecializationInstance>(ModelName.SPECIALIZATION, {
    text: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    tableName: TableName.SPECIALIZATIONS,
  });

  return Specialization;
};

export default createSpecializationModel;
