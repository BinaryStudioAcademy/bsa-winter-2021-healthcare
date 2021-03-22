import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Checkbox } from 'components/common';
import { IUserWithPermissions } from 'common/interfaces';
import { PermissionsActionCreator } from 'store/slices';
import { PermissionName } from 'common/enums';
import { RootState } from 'common/types';

type Props = {
  user: IUserWithPermissions;
  nameOfPermission: string;
};

const EditPermissionElement: React.FC<Props> = ({ user, nameOfPermission }) => {
  const { permissions } = useSelector(({ permissions }: RootState) => ({
    permissions: permissions.permissions,
  }));
  const dispatch = useDispatch();

  const userPermissions = user.permissions!.map((permission)=>permission.name);

  const { errors, register, getValues } = useForm<Record<string,string|boolean>>({
    defaultValues: {
      [nameOfPermission]: userPermissions.includes(nameOfPermission as PermissionName),
    },
    mode: 'onChange',
  });

  const handleChange = () => {
    const permission = permissions.filter((permission)=> permission.name === nameOfPermission)[0];
    getValues()[nameOfPermission] ?
      dispatch(PermissionsActionCreator.addPermissionForUser(user.id!, permission.id))
      :
      dispatch(PermissionsActionCreator.deletePermissionForUser(user.id!, permission.id));
  };

  return (
    <form onChange={handleChange}>
      <Checkbox
        name={nameOfPermission}
        value={nameOfPermission}
        label={''}
        register={register}
        errors={errors}
      />
    </form>
  );
};

export default EditPermissionElement;
