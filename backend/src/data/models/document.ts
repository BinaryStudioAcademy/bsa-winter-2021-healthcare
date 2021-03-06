import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName } from '~/common/enums';
import { IDocument } from '~/common/interfaces';

interface DocumentInstance extends IDocument, Model {}

export default (orm: Sequelize): ModelCtor<DocumentInstance> => {
  const Document = orm.define<DocumentInstance>(ModelName.DOCUMENT, {
    imagePath: {
      allowNull: false,
      type: DataTypes.STRING
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM('verified', 'in_review')
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});

  return Document;
};
