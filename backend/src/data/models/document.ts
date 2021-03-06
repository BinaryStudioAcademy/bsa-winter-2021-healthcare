import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName } from '~/common/enums';
import { IDocument } from '~/common/interfaces';
import { DocumentStatus } from '~/common/enums';

interface DocumentInstance extends IDocument, Model {}

const createDocumentModel = (orm: Sequelize): ModelCtor<DocumentInstance> => {
  const Document = orm.define<DocumentInstance>(ModelName.DOCUMENT, {
    imagePath: {
      allowNull: false,
      type: DataTypes.STRING
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM(DocumentStatus.VERIFIED, DocumentStatus.IN_REVIEW)
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});

  return Document;
};

export default createDocumentModel;
