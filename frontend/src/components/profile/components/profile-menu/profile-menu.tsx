import React from "react";
import styles from './styles.module.scss';
import personIcon from 'assets/images/icons/person.svg';

const ProfileMenu: React.FC = () => {
  return (
    <div className={styles.menuContainer}>
      <span className={styles.infoHeader}>My Profile</span>
      <div className={styles.menuItem}>
      <img src={personIcon} width="22" height="22" loading="lazy" alt="pen-icon"/>
        <span className={styles.menuText}>Personal information</span>
      </div>
    </div>
  );
};

export default ProfileMenu;

