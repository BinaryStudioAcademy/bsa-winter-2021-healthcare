import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { IUser } from 'common/interfaces';

interface IProps {
  edit: (user?:IUser) => void,
  deleteUser: (id:string) => void,
  value: IUser,
}

const ActionsButton: React.FC<IProps> = ({ edit, value, deleteUser }) => {
  const editUserHandler = () => edit(value);
  const deleteUserHandler = () => deleteUser(value.id as string);
  return (
    <div className={styles.iconsDiv}>
      <div onClick={editUserHandler} className={clsx(styles.iconDiv, styles.editIcon)}>
      </div>
      <button onClick={deleteUserHandler}>DELETE</button>
      <div className={clsx(styles.iconDiv, styles.pdfIcon)}>
      </div>
      <div className={clsx(styles.iconDiv, styles.downloadIcon)}>
      </div>
      <div className={clsx(styles.iconDiv, styles.historyIcon)}>
      </div>
    </div>
  );
}

export default ActionsButton;
