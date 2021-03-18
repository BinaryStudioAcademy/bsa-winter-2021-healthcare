import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName, TableName } from '~/common/enums';
import { IProfession } from '~/common/interfaces';

interface ProfessionInstance extends IProfession, Model {}

const createProfessionModel = (orm: Sequelize): ModelCtor<ProfessionInstance> => {
  const Profession = orm.define<ProfessionInstance>(
    ModelName.PROFESSION,
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: TableName.PROFESSIONS,
    },
  );

  return Profession;
};

export default createProfessionModel;
