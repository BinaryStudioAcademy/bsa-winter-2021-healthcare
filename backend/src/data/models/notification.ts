import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName, TableName } from '~/common/enums';
import { INotification } from '~/common/interfaces';

interface NotificationInstance extends INotification, Model {}

const createNotificationModel = (
  orm: Sequelize,
): ModelCtor<NotificationInstance> => {
  const Notification = orm.define<NotificationInstance>(
    ModelName.NOTIFICATION,
    {
      text: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      topic: DataTypes.STRING,
      to: DataTypes.STRING,
      userId: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: TableName.NOTIFICATIONS,
    },
  );

  return Notification;
};

export default createNotificationModel;
