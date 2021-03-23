import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'common/types';
import styles from './styles.module.scss';
import { Table } from 'components/common';
import { PermissionsActionCreator, UsersActionCreator } from 'store/slices';
import { Column } from 'common/interfaces';
import { getRows } from 'components/permissions/helpers';
const PermissionPage: React.FC = () => {
  const { users } = useSelector(({ users }: RootState) => ({
    users: users.users,
  }));
  const dispatch = useDispatch();

  const columns: Column[] = getRows();

  React.useEffect(() => {
    dispatch(UsersActionCreator.getUsers());
    dispatch(PermissionsActionCreator.getPermissions());
  }, []);

  return (
    <>
      <div className={styles.tablePosition}>
        <Table columns={columns} data={users} />
      </div>
    </>
  );
};

export default PermissionPage;
