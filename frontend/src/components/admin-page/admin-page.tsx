import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { RootState } from 'common/types';
import { UsersActionCreator } from 'store/slices';
import * as config from './config/config.json';
import styles from './styles.module.scss';
import SearchAndFilterForm from './search-and-filter-form';
import Users from './users';

const AdminPage: React.FC = () => {
  const { editUser } = useSelector(({ editUser }: RootState) => ({
    editUser: editUser,
  }));
  console.log(editUser.edit);
  return (
    <>
      {editUser.edit ?
      <h2>EDIT</h2>
      :
      <div className={styles.container}>
        <h2 className={styles.title}>Entries</h2>
        <SearchAndFilterForm />
        <Users />
      </div>
        }
    </>
  );
};

export default AdminPage;
