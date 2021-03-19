import * as React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

type Message = {
  text: string;
  createAt: string;
};

interface Props {
  message: Message;
  avatar: string;
  isOutcoming?: boolean;
  className?: string;
}

const Message: React.FC<Props> = ({ message: { text, createAt }, avatar, isOutcoming, className }) => (
  <div className={clsx(styles.message, { [styles.outcoming]: isOutcoming }, className)}>
    <img src={avatar} />
    <div>{text}</div>
    <span>{new Date(createAt).toLocaleTimeString()}</span>
  </div>
);

export default Message;
