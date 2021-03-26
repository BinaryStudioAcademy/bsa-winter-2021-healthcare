import { permission as permissionRepository } from '~/data/repositories';
import { IUserPermission } from '~/common/interfaces';

class Permission {
  public getAllPermissions(): Promise<IUserPermission[]> {
    return permissionRepository.getAll();
  }

  public addPermissionToUser(permission: IUserPermission): Promise<IUserPermission> {
    return permissionRepository.addPermissionToUser(permission);
  }

  public deletePermissionForUser(userId: string, permissionId: string): Promise<boolean> {
    return permissionRepository.deleteById(userId,permissionId);
  }
}

export { Permission };
