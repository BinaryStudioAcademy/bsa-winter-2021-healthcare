import React from "react";
import styles from './styles.module.scss';

const ProfileMenu: React.FC = () => {
  return (
    <div className={styles.menuContainer}>
      <span className={styles.infoHeader}>My Profile</span>
      <div className={styles.menuItem}>
        <div>Icon</div>
        <span className={styles.menuText}>Personal information</span>
      </div>
      <div className={styles.menuItem}>
        <div>Icon</div>
        <span className={styles.menuText}>Health information</span>
      </div>
      <div className={styles.menuItem}>
        <div>Icon</div>
        <span className={styles.menuText}>Visited</span>
      </div>
      <div className={styles.menuItem}>
        <div>Icon</div>
        <span className={styles.menuText}>Tests</span>
      </div>
      <div className={styles.menuItem}>
        <div>Icon</div>
        <span className={styles.menuText}>Medicine</span>
      </div>
      <div className={styles.menuItem}>
        <div>Icon</div>
        <span className={styles.menuText}>Password and security</span>
      </div>
    </div>
  );
};

export default ProfileMenu;

