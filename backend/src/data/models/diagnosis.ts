import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName } from '~/common/enums';

interface DiagnosisInstance extends Model {
  diagnosis: string;
  createdAt: Date;
  updatedAt: Date;
}

export default (orm: Sequelize): ModelCtor<DiagnosisInstance> => {
  const Diagnosis = orm.define<DiagnosisInstance>(ModelName.DIAGNOSIS, {
    diagnosis: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});

  return Diagnosis;
};
