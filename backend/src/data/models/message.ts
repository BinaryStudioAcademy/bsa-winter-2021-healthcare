import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize';
import { ModelName } from '~/common/enums';
import { IMessage } from '~/common/interfaces';

interface MessageInstance extends IMessage, Model {}

export default (orm: Sequelize): ModelCtor<MessageInstance> => {
  const Message = orm.define<MessageInstance>(ModelName.MESSAGE, {
    text: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});

  return Message;
};
