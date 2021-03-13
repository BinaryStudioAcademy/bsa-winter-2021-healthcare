import React from "react";
import ProfileMenu from "./components/profile-menu/profile-menu";
import ProfileInfo from "./components/profile-info/profile-info";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'common/types';

import styles from './styles.module.scss';

const { user } = useSelector(({ auth }: RootState) => ({
  user: auth.user
}));

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <ProfileMenu />
      <div className={styles.infoContainer}>
        <ProfileInfo user ={user}/>
      </div>
    </div>
  );
};

export default Profile;
