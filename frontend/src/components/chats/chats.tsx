import * as React from 'react';
import clsx from 'clsx';

import  { HorizontalLine, Message, MemberList, InputMessageForm } from './components';

import styles from './styles.module.scss';

import avatar from 'assets/images/phone.svg';

const Chats: React.FC = () => {

  return (
    <div className={styles.container}>

      <MemberList />

      <div className={styles.chat}>

        <div className={clsx(styles.headMessageList)}>
          <span>Giana Levin</span>
        </div>

        <div className={styles.messageList}>

          <Message avatar={avatar} message="Ut nunc aliquam, amet, aliquet adipiscing mi gravida." time="13:33" />
          <Message avatar={avatar} isOutcoming={true} message="Lorem ipsum dolor sit amet, adipiscing elit. Dictum?" time="10:33" />

          <HorizontalLine label="Today" />

          <Message avatar={avatar} isOutcoming={true} message="Lorem ipsum dolor sit amet, adipiscing elit. Dictum?" time="10:33" />
          <Message avatar={avatar} message="Ut nunc aliquam, amet, aliquet adipiscing mi gravida." time="13:43" />

          <HorizontalLine label="09 Mar" />

          <Message avatar={avatar} message="Ut nunc aliquam, amet, aliquet adipiscing mi gravida." time="13:43" />
          <Message avatar={avatar} isOutcoming={true} message="Lorem ipsum dolor sit amet, adipiscing elit. Dictum?" time="10:33" />

        </div>

        <InputMessageForm />

      </div>
    </div>
  );
};

export default Chats;
