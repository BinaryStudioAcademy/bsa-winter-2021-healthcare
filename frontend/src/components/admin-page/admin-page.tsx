import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { RootState } from 'common/types';
import { UsersActionCreator } from 'store/slices';
import styles from './styles.module.scss';
import Users from './users';
import EditUser from './edit-user';

const AdminPage: React.FC = () => {
  const { editUser } = useSelector(({ users }: RootState) => ({
    editUser: users.editUser,
  }));
  return (
    <>
      {editUser.edit ? (
        <EditUser />
      ) : (
        <div className={styles.container}>
          <Users />
        </div>
      )}
    </>
  );
};

export default AdminPage;
