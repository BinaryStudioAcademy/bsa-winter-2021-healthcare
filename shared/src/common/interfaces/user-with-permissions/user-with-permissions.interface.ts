import { IUser } from '../user';
import { UserWithPermissionsKey } from '~/common/enums';
import { IPermission } from '../permission';

interface IUserWithPermissions extends IUser {
  [UserWithPermissionsKey.PERMISSIONS]?: IPermission[]
}

export type { IUserWithPermissions };
