import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';
import { ModelName, TableName, PermissionName } from '~/common/enums';
import { IPermission } from '~/common/interfaces';

interface PermissionInstance extends IPermission, Model {}

const createPermissionModel = (
  orm: Sequelize,
): ModelCtor<PermissionInstance> => {
  const Permission = orm.define<PermissionInstance>(
    ModelName.PERMISSION,
    {
      name: {
        allowNull: false,
        type: DataTypes.ENUM(
          PermissionName.CREATE_USER,
          PermissionName.EDIT_USER,
          PermissionName.CREATE_CLINIC,
          PermissionName.EDIT_PERMISSIONS,
          PermissionName.MAP_MANIPULATION,
        ),
        unique: true,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: TableName.PERMISSIONS,
    },
  );

  return Permission;
};

export default createPermissionModel;
