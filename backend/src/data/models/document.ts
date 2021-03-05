import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';

interface DocumentInstance extends Model {
  imagePath: string;
  createdAt: Date;
  updatedAt: Date;
}

export default (orm: Sequelize): ModelCtor<DocumentInstance> => {
  const Document = orm.define<DocumentInstance>('document', {
    imagePath: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});

  return Document;
};
