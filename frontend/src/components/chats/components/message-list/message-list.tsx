import * as React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import clsx from 'clsx';
import { RootState } from 'common/types';
import { Message, HorizontalLine } from '../../components';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

const MessageList: React.FC<Props> = ({ className }) => {
  const { userId, userAvatarPath = '', messages, memberAvatarPath = '' } = useSelector(({ auth: { user }, chats: { messages, selectedMember } }: RootState) => ({
    userId: user?.id,
    userAvatarPath: user?.imagePath,
    messages,
    memberAvatarPath: selectedMember?.avatarPath,
  }));

  return (
    <div className={clsx(styles.messageList, className)}>
      {messages.map(({ id, userId: memberId, text, createdAt }, index, array) => {
        const curFromNow = moment.utc(createdAt).local().fromNow();
        const nextFromNow = moment.utc(array[index - 1]?.createdAt).local().fromNow();

        return (
          <div key={id} className={styles.messageContainer}>
            {curFromNow !== nextFromNow && true &&<HorizontalLine label={curFromNow} />}
            <Message
              message={text}
              time={moment.utc(createdAt).local().format('LT')}
              avatar={memberId === userId ? userAvatarPath : memberAvatarPath}
              isOutcoming={memberId === userId}
            />
          </div>
        );
      }).reverse()}
    </div>
  );
};

export default MessageList;
