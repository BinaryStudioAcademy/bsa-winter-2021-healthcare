import * as React from 'react';
import { useDispatch } from 'react-redux';
import { UsersActionCreator } from 'store/slices';
import styles from './styles.module.scss';
import AdminTable from './components/admin-table/admin-table';
import CreateUser from './create-user';
import EditUser from './edit-user';
import { IEditUserPayload, IRegisterPayload, IUser } from 'common/interfaces';
import { DEFAULT_USER_INSTANCE } from 'components/admin-page/constants';
import { Modal } from 'components/common';

const AdminPage: React.FC = () => {
  const [user, setUser] = React.useState<IUser>(DEFAULT_USER_INSTANCE);
  const [showPopUp, setShowPopUp] = React.useState<boolean>(false);
  const userWithDate: IEditUserPayload = {...user,birthdate:new Date(user.birthdate)};

  const dispatch = useDispatch();
  const handleEditUser = (data: IEditUserPayload) => {
    dispatch(UsersActionCreator.editUser({...data,id:user.id}));
    hideForm();
  };
  const addUser = (data: IRegisterPayload) => {
    const newUser: IUser = { ...user, ...data };
    dispatch(UsersActionCreator.addUser(newUser));
    hideForm();
  };
  const deleteUser = (id: string) => {
    dispatch(UsersActionCreator.deleteUser(id));
  };

  const showFormHandler = (user: IUser) => {
    user
      ? (setUser({ ...DEFAULT_USER_INSTANCE, ...user }), setShowPopUp(true))
      : setShowPopUp(true);
  };
  const hideForm = () => {
    setUser(DEFAULT_USER_INSTANCE);
    setShowPopUp(false);
  };
  return (
    <div className={styles.container}>
      {/* <button onClick={()=>showFormHandler()}>asd</button> */}
      <AdminTable onFormShow={showFormHandler} onUserDelete={deleteUser} />
      <Modal isShow={showPopUp}>
        {user.id ? (
          <EditUser user={userWithDate} onEditUser={handleEditUser} onFormHide={hideForm} />
        ) : (
          <CreateUser onCreateUser={addUser} onFormHide={hideForm} />
        )}
      </Modal>
    </div>
  );
};

export default AdminPage;
