import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

const SideMenu: React.FC = () => {
  return (
    <div className={styles.menuContainer}>
      <span className={styles.infoHeader}>My Profile</span>
      <div className={styles.menuItem}>
        <span className={clsx(styles.icon, styles.person)}></span>
        <span className={styles.menuText}>Personal information</span>
      </div>
    </div>
  );
};

export default SideMenu;

