import * as React from 'react';
import { DateFormat } from 'common/enums';
import { getFormattedDate } from 'helpers';

import styles from './notification.module.scss';

interface Props {
  title: string;
  text: string;
  time: string;
}

const Notification: React.FC<Props> = ({ title, text, time }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.avatar}>
          <img src="https://www.pikpng.com/pngl/b/80-805523_default-avatar-svg-png-icon-free-download-264157.png" alt="User avatar."/>
        </div>
        <div className={styles.notificationInfo}>
          <div className={styles.title}>{title}</div>
          <span className={styles.info}>{text}</span>
          <div className={styles.link}>See details</div>
        </div>
      </div>
      <div className={styles.time}>{getFormattedDate(time, DateFormat.HH_MM)}</div>
    </div>
  );
};

export default Notification;
