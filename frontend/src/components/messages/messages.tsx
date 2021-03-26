import * as React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { RootState } from 'common/types';
import  { MessageList, UserList, InputMessageForm } from './components';

import styles from './styles.module.scss';

const Messages: React.FC = () => {
  const { selectedUserName } = useSelector(({ messages: { selectedUser } }: RootState) => ({
    selectedUserName: selectedUser?.name,
  }));

  return (
    <div className={styles.container}>

      <UserList />

      <div className={styles.chat}>

        <div className={clsx(styles.headMessageList)}>
          <span>{selectedUserName}</span>
        </div>

        <MessageList />
        <InputMessageForm />

      </div>

    </div>
  );
};

export default Messages;
