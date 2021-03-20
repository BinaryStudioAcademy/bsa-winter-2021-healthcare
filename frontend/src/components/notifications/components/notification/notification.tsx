import * as React from 'react';

import styles from './notification.module.scss';

const Notification: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src="https://www.pikpng.com/pngl/b/80-805523_default-avatar-svg-png-icon-free-download-264157.png" alt="User avatar."/>
      </div>
      <div className={styles.notificationInfo}>
        <div className={styles.title}>title</div>
        <span className={styles.info}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eligendi atque ullam dolores distinctio</span>
        <div className={styles.link}>see details</div>
      </div>
      <div className={styles.time}>19:32</div>
    </div>
  );
};

export default Notification;
