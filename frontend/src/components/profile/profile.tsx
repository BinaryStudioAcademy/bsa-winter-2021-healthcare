import React, { useState } from "react";
import ProfileMenu from "./components/profile-menu/profile-menu";
import ProfileInfo from "./components/profile-info/profile-info";
import { EditUserPopup } from 'components/admin-page/components';
import { IUser, IEditUserPayload } from 'common/interfaces';
import { AuthActionCreator } from 'store/slices';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'common/types';

import styles from './styles.module.scss';

const Profile: React.FC = () => {
  const [edite, setEdit] = useState(false);
  const { user } = useSelector(({ auth }: RootState) => ({
  user: auth.user as IUser
  }));
  const dispatch = useDispatch();
  const openEditPopUp = () => {
    setEdit(true)
  }
  const handleUserInfoEdit = (userData:IEditUserPayload) => {
    userData.id = user.id
    dispatch(AuthActionCreator.editCurrentUser(userData));
    setEdit(false);
  }
  return (
    <div className={styles.profileContainer}>
      <ProfileMenu />
      <div className={styles.infoContainer}>
        <ProfileInfo user ={user} edit={openEditPopUp}/>
      </div>
      {edite && <EditUserPopup
        user={user}
        onEditUser={handleUserInfoEdit}
        onFormHide={() => setEdit(false)}
      />}
    </div>
  );
};

export default Profile;
