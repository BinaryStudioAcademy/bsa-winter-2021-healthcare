import * as React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { RootState } from 'common/types';
import  { MessageList, MemberList, InputMessageForm } from './components';

import styles from './styles.module.scss';

const Chats: React.FC = () => {
  const { selectedMemberName } = useSelector(({ chats: { selectedMember } }: RootState) => ({
    selectedMemberName: selectedMember?.name,
  }));

  return (
    <div className={styles.container}>

      <MemberList />

      <div className={styles.chat}>

        <div className={clsx(styles.headMessageList)}>
          <span>{selectedMemberName}</span>
        </div>

        <MessageList />
        <InputMessageForm />

      </div>

    </div>
  );
};

export default Chats;
