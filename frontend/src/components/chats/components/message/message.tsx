import * as React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props {
  message: string;
  time: string;
  avatar: string;
  isOutcoming?: boolean;
  className?: string;
}

const Message: React.FC<Props> = ({ message, time, avatar, isOutcoming, className }) => (
  <div className={clsx(styles.message, { [styles.outcoming]: isOutcoming }, className)}>
    <img src={avatar} />
    <div>{message}</div>
    <span>{time}</span>
  </div>
);

export default Message;
