import * as React from 'react';
import phoneIcon from 'assets/images/icons/phone.svg';
import locationIcon from 'assets/images/icons/location.svg';
import chatIcon from 'assets/images/icons/chat.svg';

import styles from './styles.module.scss';

type Doctor = {
  id:string
  name:string
  imagePath:string
  department: string
  clinic: string
  adress: string
  phone: string
}
type DocItemProps = {
  doctor:Doctor
}

const DoctorItem: React.FC<DocItemProps> = ({doctor}) => {

  return (
    <div className={styles.doctorsItemContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.doctorImage} src={doctor.imagePath} alt={doctor.name} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoContainerHead}>
          <span className={styles.department}>{doctor.department}</span>
          <span className={styles.name}>{doctor.name}</span>
          <div className={styles.clinic}>{doctor.clinic}</div>
        </div>
        <div className={styles.infoContainerBody}>
          <div className={styles.infoItem}>
            <img src={locationIcon} alt="location-icon"/>
            <span className={styles.text}>{doctor.adress}</span>
          </div>
          <div className={styles.infoItem}>
            <img src={phoneIcon} alt="phone-icon"/>
            <span className={styles.text}>{doctor.phone}</span>
          </div>
        </div>
        <div className={styles.infoContainerButtons}>
          <div className={styles.button}>Make an appoitment</div>
          <div className={styles.icon}>
            <img src={chatIcon} alt="chat-icon"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorItem;
