import * as React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props {
  id: string;
  label: string;
  info?: string;
  avatar: string;
  isSelected?: boolean;
  className?: string;
  onClick?: (id: string) => void;
}

const User: React.FC<Props> = ({ id, label, info, avatar, isSelected, className, onClick }) => {
  const handlerOnClick = () => {
    !isSelected && onClick?.(id);
  };

  return (
    <div
      className={clsx(styles.user, { [styles.selected]: isSelected }, className)}
      onClick={handlerOnClick}
    >
      <img src={avatar} />
      <span>{label}</span>
      {info}
    </div>
  );
};

export default User;
