import { PermissionModel, UserPermissionModel } from '../models';
import { IUserPermission } from '~/common/interfaces';

class Permission {

  public getAll(): Promise<IUserPermission[]> {
    return PermissionModel.findAll();
  }

  public addPermissionToUser(permission: IUserPermission): Promise<IUserPermission> {
    return UserPermissionModel.create(permission);
  }

  public async deleteById(userId: string, permissionId: string): Promise<boolean> {
    const deletedRows = await UserPermissionModel.destroy({
      where: { userId, permissionId },
    });

    return Boolean(deletedRows);
  }
}

export { Permission };
