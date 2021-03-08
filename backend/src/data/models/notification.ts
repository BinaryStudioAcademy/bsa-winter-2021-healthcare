import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName } from '~/common/enums';
import { INotification } from '~/common/interfaces';

interface NotificationInstance extends INotification, Model {}

const createNotificationModel = (orm: Sequelize): ModelCtor<NotificationInstance> => {
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

export default createNotificationModel;