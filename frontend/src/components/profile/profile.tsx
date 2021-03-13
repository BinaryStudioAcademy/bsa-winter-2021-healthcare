import React, { useState } from "react";
import ProfileMenu from "./components/profile-menu/profile-menu";
import ProfileInfo from "./components/profile-info/profile-info";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'common/types';
import { Modal } from 'components/common';

import styles from './styles.module.scss';

const Profile: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)
  const { user } = useSelector(({ auth }: RootState) => ({
  user: auth.user
  }));
  const editUserInfo = () => {        
    setOpenModal(true)    
  }
  return (
    <div className={styles.profileContainer}>
      <ProfileMenu />
      <div className={styles.infoContainer}>
        <ProfileInfo user ={user} edit={editUserInfo}/>
      </div>
      <Modal open={openModal} />
    </div>
  );
};

export default Profile;
