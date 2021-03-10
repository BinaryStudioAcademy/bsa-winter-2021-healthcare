import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { RootState } from 'common/types';
import { AppRoute } from 'common/enums';
import { UsersActionCreator } from 'store/slices';
import styles from './styles.module.scss';
import Users from './users';
import EditUser from './edit-user';
import { IRegisterPayload, IUser } from 'healthcare-shared';

const AdminPage: React.FC = () => {
  const history = useHistory();
  const { user } = useSelector(({ users }: RootState) => ({
    user: users.editUser,
  }));

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const editUser = (data: IRegisterPayload) => {
    const editedUser: IUser = Object.assign({}, user, data)
    dispatch(UsersActionCreator.editUser(editedUser));
    setTimeout(() => {
      history.push(AppRoute.ADMIN_PAGE);
    }, 0)
  }
  const setUser = (data: IRegisterPayload) => {
    dispatch(UsersActionCreator.addUser(data));
    setTimeout(() => {
      history.push(AppRoute.ADMIN_PAGE);
    }, 0)
  }
  return (
    <div className={styles.container}>
      <EditUser user={user} func={editUser} />
      <EditUser func={setUser} />
      <Users />
    </div>
  );
};

export default AdminPage;
