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
  const { userId, userAvatarPath = '', messages, memberAvatarPath = '' } = useSelector(({ auth: { user }, messages: { messages, selectedMember } }: RootState) => ({
    userId: user?.id,
    userAvatarPath: user?.imagePath,
    messages,
    memberAvatarPath: selectedMember?.avatarPath,
  }));

  return (
    <div className={clsx(styles.messageList, className)}>
      {messages.map(({ id, userId: memberId, text, createdAt }, index, array) => {

        const curFromNow = new Date(createdAt).toLocaleDateString(locale, dateOptions);
        const prevFromNow = new Date(array[index + 1]?.createdAt).toLocaleDateString(locale, dateOptions);

        return (
          <div key={id} className={styles.messageContainer}>

            {(curFromNow !== prevFromNow || (array.length + 1) === index)
              && <HorizontalLine label={curFromNow} />}

            <Message
              message={text}
              time={new Date(createdAt).toLocaleTimeString(locale, timeOptions)}
              avatar={memberId === userId ? userAvatarPath : memberAvatarPath}
              isOutcoming={memberId === userId}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
