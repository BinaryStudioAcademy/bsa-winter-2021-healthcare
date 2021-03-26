import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NotificationsActionCreator } from 'store/slices';
import { RootState } from 'common/types';
import { NoDataLabel } from 'common/enums';
import { NoDataPlaceholder } from 'components/common';
import Notification from './components/notification/notification';
import { getDefaultAvatar } from 'helpers';

import styles from './styles.module.scss';
import { IUser } from 'common/interfaces';

const Notifications: React.FC = () => {
  const { notifications, user } = useSelector(({ notifications, auth }: RootState) => ({
    notifications: notifications.notifications,
    user: auth.user,
  }));
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(NotificationsActionCreator.getNotificationsByUser(user?.id as string));
  }, []);

  const hasNotifications = Boolean(notifications.length);

  return (
    <div className={styles.wrapper}>

      {hasNotifications
        ? notifications.map((notification, index) => (
          <Notification
            key={index}
            title={notification.topic}
            text={notification.text}
            time={notification.createdAt}
            avatar={user?.imagePath ?? getDefaultAvatar(user as IUser)}
          />
        ))
        : <NoDataPlaceholder label={NoDataLabel.NO_NOTIFICATIONS} />}

    </div>
  );
};

export default Notifications;
