import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName, TableName } from '~/common/enums';
import { IUserPermission } from '~/common/interfaces';

interface UserPermissionInstance extends IUserPermission, Model {}

const createUserPermissionModel = (
  orm: Sequelize,
): ModelCtor<UserPermissionInstance> => {
  const UserPermission = orm.define<UserPermissionInstance>(
    ModelName.USER_PERMISSION,
    {
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: TableName.USERS_PERMISSIONS,
    },
  );

  return UserPermission;
};

export default createUserPermissionModel;
