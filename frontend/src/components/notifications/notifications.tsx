import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NotificationsActionCreator } from 'store/slices';
import { RootState } from 'common/types';
import Notification from './components/notification/notification';

import styles from './styles.module.scss';

const Notifications: React.FC = () => {
  const { notifications } = useSelector(({ notifications }: RootState) => ({
    notifications: notifications.notifications,
  }));
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(NotificationsActionCreator.getNotifications());
  }, []);

  // eslint-disable-next-line no-console
  console.log(notifications);

  return (
    <div className={styles.wrapper}>
      {notifications.map((notification, index) => (
        <Notification
          key={index}
          title={notification.topic}
          text={notification.text}
          time={notification.createdAt}
        />
      ))}
    </div>
  );
};

export default Notifications;
