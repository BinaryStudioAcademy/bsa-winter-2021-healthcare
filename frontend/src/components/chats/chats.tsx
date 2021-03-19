import * as React from 'react';
import clsx from 'clsx';

import  { MessageList, MemberList, InputMessageForm } from './components';

import styles from './styles.module.scss';

const Chats: React.FC = () => {
  const userName = 'Giana Levin';  // stor -> auth -> user -> name

  return (
    <div className={styles.container}>

      <MemberList />

      <div className={styles.chat}>

        <div className={clsx(styles.headMessageList)}>
          <span>{userName}</span>
        </div>

        <MessageList />

        <InputMessageForm />

      </div>

    </div>
  );
};

export default Chats;
