import React from "react";
import phoneIcon from 'assets/images/icons/phone.svg';
import locationIcon from 'assets/images/icons/location.svg';
import mailIcon from 'assets/images/icons/mail.svg';
import penIcon from 'assets/images/icons/pen.svg';
import styles from './styles.module.scss';

const ProfileInfo: React.FC = () => {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.infoHeader}>
        <span>My Profile</span>
        <div className={styles.editButton}>
          <img src={penIcon} width="18" height="18" loading="lazy" alt="pen-icon"/>
        </div>
      </div>
      <div className={styles.infoBloks}>
        <div
          className={styles.photo}
          style={{
            backgroundImage:
              "url(https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA)"
          }}
        ></div>
        <div className={styles.mainUserInfo}>
          <div className={styles.card}>Card: BO44CC</div>
          <span className={styles.name}>Ron Wizley</span>
          <span className={styles.sex}>Male</span>
          <span className={styles.dateLabel}>Date of Birth</span>
          <span className={styles.date}>12 May 1991</span>
        </div>
        <div className={styles.secUserInfo}>
          <div className={styles.item}>
            <img src={phoneIcon} width="20" height="20" loading="lazy" alt="phone-icon"/>
            <span className={styles.text}>+0111199999</span>
          </div>
          <div className={styles.item}>
          <img src={mailIcon} width="21" height="15" loading="lazy" alt="mail-icon"/>
            <span className={styles.text}>ron@gmail.com</span>
          </div>
          <div className={styles.item}>
            <img src={locationIcon} width="16" height="22" loading="lazy" alt="location-icon"/>
            <span className={styles.text}>
              810 wayat street San Antonio something wery long
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

