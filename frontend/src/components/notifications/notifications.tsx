import * as React from 'react';
import Notification from './components/notification/notification';

import styles from './styles.module.scss';

const Notifications: React.FC = () => {

  return (
    <div className={styles.wrapper}>
      <Notification />
      <Notification />
      <Notification />
    </div>
  );
};

export default Notifications;
