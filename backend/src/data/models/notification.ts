import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName } from '~/common/enums';

interface NotificationInstance extends Model {
  text: string;
  topic: string;
  createdAt: Date;
  updatedAt: Date;
}

export default (orm: Sequelize): ModelCtor<NotificationInstance> => {
  const Notification = orm.define<NotificationInstance>(ModelName.NOTIFICATION, {
    text: {
      allowNull: false,
      type: DataTypes.STRING
    },
    topic: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});

  return Notification;
};
