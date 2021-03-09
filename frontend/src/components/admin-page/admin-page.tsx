import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from 'common/types';
import { AppRoute } from 'common/enums';
import { UsersActionCreator } from 'store/slices';
import styles from './styles.module.scss';
import Users from './users';
import EditUser from './edit-user';
import { IRegisterPayload } from 'healthcare-shared';

const AdminPage: React.FC = () => {

  const { user } = useSelector(({ users }: RootState) => ({
    user: users.editUser,
  }));

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const editUser = (data:IRegisterPayload) => {
    dispatch(UsersActionCreator.editUser(data));
  }
  const setUser = (data:IRegisterPayload) => {
    dispatch(UsersActionCreator.addUser(data))
  }

  switch (pathname) {
    case AppRoute.EDIT_USER:
      return <EditUser user={user} func={editUser} />;
    case AppRoute.CREATE_USER:
      return <EditUser func={setUser} />;
    default:
      return (
        <div className={styles.container}>
          <Users />
        </div>
      );
  }
};

export default AdminPage;
