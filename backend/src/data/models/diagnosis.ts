import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName } from '~/common/enums';
import { IDiagnosis } from '~/common/interfaces';

interface DiagnosisInstance extends IDiagnosis, Model {}

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
