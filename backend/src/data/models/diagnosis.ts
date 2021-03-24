import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName, TableName } from '~/common/enums';
import { IDiagnosis } from '~/common/interfaces';

interface DiagnosisInstance extends IDiagnosis, Model {}

const createDiagnosisModel = (orm: Sequelize): ModelCtor<DiagnosisInstance> => {
  const Diagnosis = orm.define<DiagnosisInstance>(
    ModelName.DIAGNOSIS,
    {
      diagnosis: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: TableName.DIAGNOSES,
    },
  );

  return Diagnosis;
};

export default createDiagnosisModel;
