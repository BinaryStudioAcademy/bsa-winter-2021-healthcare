import React from "react";
import ProfileMenu from "./components/profile-menu/profile-menu";
import ProfileInfo from "./components/profile-info/profile-info";
import { useSelector } from 'react-redux';
import { RootState } from 'common/types';


import styles from './styles.module.scss';

const Profile: React.FC = () => {
  const { user } = useSelector(({ auth }: RootState) => ({
  user: auth.user
  }));
  const editUserInfo = () => {
    console.log('edit user');
  }
  return (
    <div className={styles.profileContainer}>
      <ProfileMenu />
      <div className={styles.infoContainer}>
        <ProfileInfo user ={user} edit={editUserInfo}/>
      </div>
    </div>
  );
};

export default Profile;
