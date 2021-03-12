import React from "react";
import ProfileMenu from "./components/profile-menu/profile-menu";
import ProfileInfo from "./components/profile-info/profile-info";

import styles from './styles.module.scss';

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <ProfileMenu />
      <div className={styles.infoContainer}>
        <ProfileInfo />
      </div>
    </div>
  );
};

export default Profile;
