import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName, TableName, ProfessionName } from '~/common/enums';
import { IProfession } from '~/common/interfaces';

interface ProfessionInstance extends IProfession, Model { }

const createProfessionModel = (orm: Sequelize): ModelCtor<ProfessionInstance> => {
  const Profession = orm.define<ProfessionInstance>(
    ModelName.PROFESSION,
    {
      name: {
        allowNull: false,
        type: DataTypes.ENUM(
          ProfessionName.DENTIST,
          ProfessionName.DERMATOLOGIST,
          ProfessionName.ENDOCRINOLOGIST,
          ProfessionName.PEDIATRICIAN,
          ProfessionName.SURGEON,
        ),
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
