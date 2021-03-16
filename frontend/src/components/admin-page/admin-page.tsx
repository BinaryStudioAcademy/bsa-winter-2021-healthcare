import * as React from 'react';
import { useDispatch } from 'react-redux';
import { UsersActionCreator } from 'store/slices';
import styles from './styles.module.scss';
import {AdminTable, CreateUserPopup, EditUserPopup} from './components';
import { IEditUserPayload, IRegisterPayload, IUser } from 'common/interfaces';
import { DEFAULT_USER_INSTANCE } from 'components/admin-page/constants';
import { Modal } from 'components/common';
import { CreateUserCb, DeleteUserCb, EditUserCb, HideFormCb, ShowFormCb } from './common/types';

const AdminPage: React.FC = () => {
  const [user, setUser] = React.useState<IUser>(DEFAULT_USER_INSTANCE);
  const [isShowPopUp, setIsShowPopUp] = React.useState<boolean>(false);

  const dispatch = useDispatch();
  const handleEditUser:EditUserCb = (userData: IEditUserPayload) => {
    dispatch(UsersActionCreator.editUser({...userData, id:user.id}));
    handleHideForm();
  };
  const handleAddUser:CreateUserCb = (data: IRegisterPayload) => {
    const newUser: IUser = { ...user, ...data };
    dispatch(UsersActionCreator.addUser(newUser));
    handleHideForm();
  };
  const handleDeleteUser:DeleteUserCb = (id: string) => {
    dispatch(UsersActionCreator.deleteUser(id));
  };

  const handleShowForm:ShowFormCb = (user?: IUser) => {
    user
      ? (setUser({ ...DEFAULT_USER_INSTANCE, ...user }), setIsShowPopUp(true))
      : setIsShowPopUp(true);
  };
  const handleHideForm:HideFormCb = () => {
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
