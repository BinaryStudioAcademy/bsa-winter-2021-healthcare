import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'common/types';
import { UsersActionCreator } from 'store/slices';
import styles from './styles.module.scss';
import Users from './users';
import CreateUser from './create-user';
import EditUser from './edit-user';
import { IEditUserPayload, IRegisterPayload, IUser } from 'common/interfaces';
import { UserType } from 'common/enums';

const DEFAULT_USER_INSTANCE = {
  'id': '',
  'name': '',
  'surname': '',
  'sex': '',
  'type': '',
  'birthdate': '',
  'phone': '',
  'password': '',
  'email': '',
  'imagePath': '',
  'diagnosis': '',
  'createdAt': '',
  'updatedAt': '',
};

// function changeDataToIUser(data:IRegisterPayload){
//   const userType = data.isStaff ? UserType.DOCTOR : UserType.PATIENT
//   return{
//     name:data.name,
//     surname:data.surname,
//     email:data.email,
//     password:data.password,
//     phone:data.phone,
//     type:userType
//   }
// }

const AdminPage: React.FC = () => {
  const [user, setUser] = React.useState(DEFAULT_USER_INSTANCE);
  const [showPopUp, setShowPopUp] = React.useState(false);

  const dispatch = useDispatch();
  const editUser = (data: IEditUserPayload) => {
    const editedUser: IUser = {...user as IUser, ...data};
    dispatch(UsersActionCreator.editUser(editedUser));
    hideForm();

  }
  const addUser = (data: IRegisterPayload) => {
    // const newData:Record<string, unknown> | string = changeDataToIUser(data);
    const newUser: IUser = {...user as IUser, ...data,};
    dispatch(UsersActionCreator.addUser(newUser));
    hideForm()
  }
  const deleteUser = (id: string) => {
    dispatch(UsersActionCreator.deleteUser(id));
  }

  const showFormHandler = (user?: IUser) => {
    user ? (setUser({ ...DEFAULT_USER_INSTANCE, ...user }), setShowPopUp(true)) : setShowPopUp(true);
  }
  const hideForm = () => {
    setUser(DEFAULT_USER_INSTANCE);
    setShowPopUp(false);
  }
  return (
    <div className={styles.container}>
      {
        showPopUp ?
          (<>
            {
              user.id ?
                <EditUser user={user as IUser} func={editUser} hideForm={hideForm} />
                :
                <CreateUser func={addUser} hideForm={hideForm} />
            }
          </>)
          : null
      }
      <Users showForm={showFormHandler} deleteUser={deleteUser} />
    </div>
  );
};

export default AdminPage;
