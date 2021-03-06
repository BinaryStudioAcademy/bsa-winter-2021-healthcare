import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName } from '~/common/enums';

interface DocumentInstance extends Model {
  imagePath: string;
  createdAt: Date;
  updatedAt: Date;
}

export default (orm: Sequelize): ModelCtor<DocumentInstance> => {
  const Document = orm.define<DocumentInstance>(ModelName.DOCUMENT, {
    imagePath: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});

  return Document;
};
