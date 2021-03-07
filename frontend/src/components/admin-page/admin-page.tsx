import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'common/types';
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
