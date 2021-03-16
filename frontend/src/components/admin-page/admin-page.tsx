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
    handleHideForm();
  };
  const handleAddUser = (data: IRegisterPayload) => {
    const newUser: IUser = { ...user, ...data };
    dispatch(UsersActionCreator.addUser(newUser));
    handleHideForm();
  };
  const handleDeleteUser = (id: string) => {
    dispatch(UsersActionCreator.deleteUser(id));
  };

  const handleShowForm = (user: IUser) => {
    user
      ? (setUser({ ...DEFAULT_USER_INSTANCE, ...user }), setIsShowPopUp(true))
      : setIsShowPopUp(true);
  };
  const handleHideForm = () => {
    setUser(DEFAULT_USER_INSTANCE);
    setIsShowPopUp(false);
  };
  return (
    <div className={styles.container}>
      {/* <button onClick={()=>showFormHandler()}>asd</button> */}
      <AdminTable onFormShow={handleShowForm} onUserDelete={handleDeleteUser} />
      <Modal isShow={isShowPopUp}>
        {user.id ? (
          <EditUserPopup user={user} onEditUser={handleEditUser} onFormHide={handleHideForm} />
        ) : (
          <CreateUserPopup onCreateUser={handleAddUser} onFormHide={handleHideForm} />
        )}
      </Modal>
    </div>
  );
};

export default AdminPage;
