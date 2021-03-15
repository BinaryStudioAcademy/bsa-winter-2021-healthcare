import React from "react";
import { IUser } from 'common/interfaces/user';
import { getDateFormat } from 'helpers';
import clsx from "clsx";
import styles from './styles.module.scss';

type Props = {
  user: IUser | null
  edit: () => void
}

const ProfileInfo: React.FC<Props> = ({user, edit}) => {
  let birthdate
  if (user) birthdate = getDateFormat(user?.birthdate)

  return (
    <div className={styles.mainInfo}>
      <div className={styles.infoHeader}>
        <span>My Profile</span>
        <div className={styles.editButton} onClick={edit}>
          <span className={clsx(styles.icon, styles.pen)}></span>
        </div>
      </div>
      <div className={styles.infoBloks}>
        <div
          className={styles.photo}
          style={{
            backgroundImage: `url(${user?.imagePath})`
          }}
        ></div>
        <div className={styles.mainUserInfo}>
          <div className={styles.card}>Card: BO44CC</div>
          <span className={styles.name}>{user?.name} {user?.surname}</span>
          <span className={styles.sex}>{user?.sex}</span>
          <span className={styles.dateLabel}>Date of Birth</span>
          <span className={styles.date}>{birthdate}</span>
        </div>
        <div className={styles.secUserInfo}>
          <div className={styles.item}>
            <span className={clsx(styles.icon, styles.phone)}></span>
            <span className={styles.text}>{user?.phone}</span>
          </div>
          <div className={styles.item}>
            <span className={clsx(styles.icon, styles.email)}></span>
            <span className={styles.text}>{user?.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

