import React from "react";
import phoneIcon from 'assets/images/icons/phone.svg';
import mailIcon from 'assets/images/icons/mail.svg';
import penIcon from 'assets/images/icons/pen.svg';
import { IUser } from 'common/interfaces/user'
import styles from './styles.module.scss';

type Props = {
  user: IUser | null
  edit: () => void
}

const ProfileInfo: React.FC<Props> = ({user, edit}) => {

  return (
    <div className={styles.mainInfo}>
      <div className={styles.infoHeader}>
        <span>My Profile</span>
        <div className={styles.editButton} onClick={edit}>
          <img src={penIcon} width="18" height="18" loading="lazy" alt="pen-icon"/>
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
          <span className={styles.date}>12 May 1991</span>
        </div>
        <div className={styles.secUserInfo}>
          <div className={styles.item}>
            <img src={phoneIcon} width="20" height="20" loading="lazy" alt="phone-icon"/>
            <span className={styles.text}>{user?.phone}</span>
          </div>
          <div className={styles.item}>
          <img src={mailIcon} width="21" height="15" loading="lazy" alt="mail-icon"/>
            <span className={styles.text}>{user?.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

