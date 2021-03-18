import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { RootState } from 'common/types';
import styles from './styles.module.scss';
import { Table } from 'components/common';
import { UsersActionCreator } from 'store/slices';
import { Column } from 'common/interfaces';
import { getRows } from 'components/permissions/helpers';

const PermissionPage: React.FC = () => {
  const { users } = useSelector(({ users }: RootState) => ({
    users: users.users,
  }));
  const dispatch = useDispatch();

  const { control } = useForm({
    
  });

  /* eslint-disable no-console */
  // const handleChangePermission = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   console.log(e.target.checked);
  /* eslint-enable no-console */

  const columns: Column[] = getRows({ control });

  React.useEffect(() => {
    dispatch(UsersActionCreator.getUsers());
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
