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
}

const Member: React.FC<Props> = ({ label, info, avatar, isSelected, className }) => {
  const handlerSelectMember = () => {
    // !isSelected && action -> selectMember(id)
  };

  return (
    <div className={clsx(styles.member, { [styles.selected]: isSelected }, className)} onClick={handlerSelectMember}>
      <img src={avatar} />
      <span>{label}</span>
      {info}
    </div>
  );
};

export default Member;
