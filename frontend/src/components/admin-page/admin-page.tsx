import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { RootState } from 'common/types';
import { UsersActionCreator } from 'store/slices';
import styles from './styles.module.scss';
import SearchAndFilterForm from './search-and-filter-form';
import Users from './users';
import EditUser from './edit-user';

const AdminPage: React.FC = () => {
  const { editUser } = useSelector(({ users }: RootState) => ({
    editUser: users.editUser,
  }));
  console.log(editUser.edit);
  return (
    <>
      {editUser.edit ? (
        <EditUser />
      ) : (
        <div className={styles.container}>
          <h2 className={styles.title}>Entries</h2>
          <SearchAndFilterForm />
          <Users />
        </div>
      )}
    </>
  );
};

export default AdminPage;
