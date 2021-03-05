import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';

interface DiagnosisInstance extends Model {
  diagnosis: string;
  createdAt: Date;
  updatedAt: Date;
}

export default (orm: Sequelize): ModelCtor<DiagnosisInstance> => {
  const Diagnosis = orm.define<DiagnosisInstance>('diagnosis', {
    diagnosis: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});

  return Diagnosis;
};
