import * as React from 'react';
import clsx from 'clsx';
import { Message, HorizontalLine } from '../../components';

import styles from './styles.module.scss';

import avatar from 'assets/images/phone.svg';

const messages = [  // stor -> chats -> messages
  {

    id: '1122334455',
    to: '12345',
    text: 'Lorem ipsum dolor sit amet, adipiscing elit. Dictum?',
    createdAt: '10:33',
    updatedAt: '',

  }, {

    id: '5544332211',
    to: '54321',
    text: 'Ut nunc aliquam, amet, aliquet adipiscing mi gravida.',
    createdAt: '13:43',
    updatedAt: '',

  },
];

const selectedMemberAvatar = avatar;  // stor -> chats -> selectedMemberAvatar

const userId = '12345';  // stor -> auth -> user -> id
const userAvatar = avatar;  // stor -> auth -> user -> avatar

interface Props {
  className?: string;
}

const MessageList: React.FC<Props> = ({ className }) => (
  <div className={clsx(styles.messageList, className)}>
    {messages.map((message) => (
      <Message
        key={message.id}
        message={message.text}
        time={message.createdAt}
        avatar={message.to === userId ? selectedMemberAvatar : userAvatar}
        isOutcoming={message.to !== userId}
      />
    ))}
    <HorizontalLine label="Today" />  {/* need add moments and logic */}
  </div>
);

export default MessageList;
