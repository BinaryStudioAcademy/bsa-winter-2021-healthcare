import * as React from 'react';
import { useDispatch } from 'react-redux';
import { UsersActionCreator } from 'store/slices';
import styles from './styles.module.scss';
import {AdminTable, CreateUserPopup, EditUserPopup} from './components';
import { IEditUserPayload, IRegisterPayload, IUser } from 'common/interfaces';
import { DEFAULT_USER_INSTANCE } from 'components/admin-page/constants';
import { Modal } from 'components/common';

const AdminPage: React.FC = () => {
  const [user, setUser] = React.useState<IUser>(DEFAULT_USER_INSTANCE);
  const [isShowPopUp, setIsShowPopUp] = React.useState<boolean>(false);

  const dispatch = useDispatch();
  const handleEditUser = (data: IEditUserPayload) => {
    dispatch(UsersActionCreator.editUser({...data,id:user.id}));
    hideForm();
  };
  const handleAddUser = (data: IRegisterPayload) => {
    const newUser: IUser = { ...user, ...data };
    dispatch(UsersActionCreator.addUser(newUser));
    hideForm();
  };
  const handleDeleteUser = (id: string) => {
    dispatch(UsersActionCreator.deleteUser(id));
  };

  const showFormHandler = (user: IUser) => {
    user
      ? (setUser({ ...DEFAULT_USER_INSTANCE, ...user }), setIsShowPopUp(true))
      : setIsShowPopUp(true);
  };
  const hideForm = () => {
    setUser(DEFAULT_USER_INSTANCE);
    setIsShowPopUp(false);
  };
  return (
    <div className={styles.container}>
      {/* <button onClick={()=>showFormHandler()}>asd</button> */}
      <AdminTable onFormShow={showFormHandler} onUserDelete={handleDeleteUser} />
      <Modal isShow={isShowPopUp}>
        {user.id ? (
          <EditUserPopup user={user} onEditUser={handleEditUser} onFormHide={hideForm} />
        ) : (
          <CreateUserPopup onCreateUser={handleAddUser} onFormHide={hideForm} />
        )}
      </Modal>
    </div>
  );
};

export default AdminPage;
