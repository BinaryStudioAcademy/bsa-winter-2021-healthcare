import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NotificationsActionCreator } from 'store/slices';
import { RootState } from 'common/types';
import { NoDataLabels } from 'common/enums';
import { NoData } from 'components/common';
import Notification from './components/notification/notification';

import styles from './styles.module.scss';

const Notifications: React.FC = () => {
  const { notifications, user } = useSelector(({ notifications, auth }: RootState) => ({
    notifications: notifications.notifications,
    user: auth.user,
  }));
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(NotificationsActionCreator.getNotificationsByUser(user?.id as string));
  }, []);

  return (
    <div className={styles.wrapper}>

      {!notifications.length && <NoData label={NoDataLabels.NO_NOTIFICATIONS} />}

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
