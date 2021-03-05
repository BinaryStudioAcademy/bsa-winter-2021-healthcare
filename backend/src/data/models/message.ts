import { Sequelize, DataTypes, ModelCtor, Model } from 'sequelize';

interface MessageInstance extends Model {
  text: string
  createdAt: Date;
  updatedAt: Date;
}

export default (orm: Sequelize): ModelCtor<MessageInstance> => {
  const Message = orm.define<MessageInstance>('message', {
    text: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});

  return Message;
};
