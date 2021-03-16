import React from "react";
import { IUser } from 'common/interfaces/user';
import { DateFormat } from 'common/enums';
import { getFormattedDate } from 'helpers';
import clsx from "clsx";
import styles from './styles.module.scss';

type Props = {
  user: IUser
  edit: () => void
}

const ProfileInfo: React.FC<Props> = ({user, edit}) => {
  const birthdate = getFormattedDate( user.birthdate, DateFormat.D_MMMM_YYYY);
  return (
    <div className={styles.mainInfo}>
      <div className={styles.infoHeader}>
        <span>My Profile</span>
        <div className={styles.editButton} onClick={edit}>
          <span className={clsx(styles.icon, styles.pen)}></span>
        </div>
      </div>
      <div className={styles.infoBloks}>
        <div className={styles.photo}>
          <img className={styles.image} src={user.imagePath} alt={user.name}/>
        </div>
        <div className={styles.mainUserInfo}>
          <div className={styles.card}>{user.type}</div>
          <span className={styles.name}>{user.name} {user?.surname}</span>
          <span className={styles.sex}>{user.sex}</span>
          <span className={styles.dateLabel}>Date of Birth</span>
          <span className={styles.date}>{birthdate}</span>
        </div>
        <div className={styles.secUserInfo}>
          <div className={styles.item}>
            <span className={clsx(styles.icon, styles.phone)}></span>
            <span className={styles.text}>{user.phone}</span>
          </div>
          <div className={styles.item}>
            <span className={clsx(styles.icon, styles.email)}></span>
            <span className={styles.text}>{user.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

