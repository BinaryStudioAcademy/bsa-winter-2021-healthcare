import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Checkbox } from 'components/common';
import { IUserWithPermissions } from 'common/interfaces';
import { PermissionsActionCreator } from 'store/slices';
import { PermissionName } from 'common/enums';
import { RootState } from 'common/types';
import { getPermissionsNames, getPermissionByName } from 'components/permissions/helpers';

type Props = {
  user: IUserWithPermissions;
  nameOfPermission: string;
};

const EditPermissionElement: React.FC<Props> = ({ user, nameOfPermission }) => {
  const { permissions } = useSelector(({ permissions }: RootState) => ({
    permissions: permissions.permissions,
  }));
  const dispatch = useDispatch();

  const { errors, register, getValues } = useForm<Record<string, string | boolean>>({
    defaultValues: {
      [nameOfPermission]: getPermissionsNames(user).includes(nameOfPermission as PermissionName),
    },
    mode: 'onChange',
  });

  const handleChange = () => {
    const permission = getPermissionByName(permissions,nameOfPermission);

    permission &&
      (getValues()[nameOfPermission] ?
        dispatch(PermissionsActionCreator.addPermissionForUser(user.id as string, permission.id))
        :
        dispatch(PermissionsActionCreator.deletePermissionForUser(user.id as string, permission.id))
      );
  };

  return (
    <form onChange={handleChange}>
      <Checkbox
        name={nameOfPermission}
        value={nameOfPermission}
        label="Change permission"
        hasHiddenLabel
        register={register}
        errors={errors}
      />
    </form>
  );
};

export default EditPermissionElement;
