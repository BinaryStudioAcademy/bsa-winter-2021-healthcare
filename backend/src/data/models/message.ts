import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize';
import { ModelName, TableName } from '~/common/enums';
import { IMessage } from '~/common/interfaces';

interface MessageInstance extends IMessage, Model {}

const createMessageModel = (orm: Sequelize): ModelCtor<MessageInstance> => {
  const Message = orm.define<MessageInstance>(
    ModelName.MESSAGE,
    {
      to: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      text: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: TableName.MESSAGES,
    },
  );

  return Message;
};

export default createMessageModel;
