import * as React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { RootState } from 'common/types';
import { Message, HorizontalLine } from '../../components';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

const dateOptions = { day: 'numeric', month: 'short' };
const timeOptions = { hour: '2-digit', minute: '2-digit', hour12:false };
const locale = 'en-GB';

const MessageList: React.FC<Props> = ({ className }) => {
  const { userId, messages, userAvatarPath = '', selectedUserAvatarPath = '' } = useSelector(({ auth: { user }, messages: { messages, selectedUser } }: RootState) => ({
    userId: user?.id,
    userAvatarPath: user?.imagePath,
    messages,
    selectedUserAvatarPath: selectedUser?.imagePath,
  }));

  return (
    <div className={clsx(styles.messageList, className)}>
      {messages.map(({ id, userId: messageUserId, text, createdAt }, index, array) => {

        const curFromNow = new Date(createdAt).toLocaleDateString(locale, dateOptions);
        const prevFromNow = new Date(array[index + 1]?.createdAt).toLocaleDateString(locale, dateOptions);

        return (
          <div key={id} className={styles.messageContainer}>

            {(curFromNow !== prevFromNow || (array.length + 1) === index)
              && <HorizontalLine label={curFromNow} />}

            <Message
              message={text}
              time={new Date(createdAt).toLocaleTimeString(locale, timeOptions)}
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
