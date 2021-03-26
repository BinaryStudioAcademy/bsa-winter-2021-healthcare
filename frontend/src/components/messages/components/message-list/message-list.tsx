import * as React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { RootState } from 'common/types';
import { Message, HorizontalLine } from '../../components';
import { NoData } from 'components/common';
import { getFormattedDate } from 'helpers';
import { DateFormat, NoDataLabels } from 'common/enums';
import { DELTA_INDEX } from './common/constants';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

const MessageList: React.FC<Props> = ({ className }) => {
  const { userId, messages, userAvatarPath = '', selectedUserAvatarPath = '' } = useSelector(({ auth: { user }, messages: { messages, selectedUser } }: RootState) => ({
    userId: user?.id,
    userAvatarPath: user?.imagePath,
    messages,
    selectedUserAvatarPath: selectedUser?.imagePath,
  }));

  return (
    <div className={clsx(styles.messageList, className)}>

      {!messages.length && <NoData label={NoDataLabels.NO_MESSAGES} />}

      {messages.map(({ id, userId: messageUserId, text, createdAt }, index, array) => {

        const curFromNow = getFormattedDate(createdAt, DateFormat.DD_MMM);
        const prevFromNow = getFormattedDate(array[index + DELTA_INDEX]?.createdAt, DateFormat.DD_MMM);

        return (
          <div key={id} className={styles.messageContainer}>

            {(curFromNow !== prevFromNow || (index + DELTA_INDEX) === array.length)
              && <HorizontalLine label={curFromNow} />}

            <Message
              message={text}
              time={getFormattedDate(createdAt, DateFormat.HH_MM)}
              avatar={messageUserId === userId ? userAvatarPath : selectedUserAvatarPath}
              isOutcoming={messageUserId === userId}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
