import * as React from 'react';
import { IDoctorDetails } from 'common/interfaces';
import phoneIcon from 'assets/images/phone.svg';
import checkIcon from 'assets/images/icons/check.svg';
import styles from './styles.module.scss';
import { getDefaultAvatar } from 'helpers';

type Props = {
  doctor: IDoctorDetails;
};

const Doctor: React.FC<Props> = ({ doctor }) => {
  return (
    <div className={styles.doctorsContainer}>
      <div className={styles.personalDataContainer}>
        <img
          className={styles.doctorImage}
          src={doctor.imagePath ?? getDefaultAvatar(doctor)}
          width="58"
          height="60"
          loading="lazy"
          alt={doctor.name}
        />
        <div className={styles.personalDataBody}>
          <div className={styles.phone}>
            <img
              src={phoneIcon}
              width="22"
              height="22"
              loading="lazy"
              alt="phone-icon"
            />
            <span className={styles.phoneNumber}>{doctor.phone}</span>
          </div>
          <span className={styles.name}>
            {doctor.name} {doctor.surname}
          </span>
        </div>
      </div>
      <div className={styles.aboutContainer}>
        <span className={styles.aboutTitle}>
          About {doctor.name} {doctor.surname}
        </span>
        <div className={styles.aboutBody}>{doctor.doctor.about}</div>
      </div>

      <div className={styles.conditionsContainer}>
        <div className={styles.conditionsTitle}>
          <img
            src={checkIcon}
            width="22"
            height="22"
            loading="lazy"
            alt="check-icon"
          />
          <span className={styles.titleText}>Conditions Treated</span>
        </div>
        <ul className={styles.conditionsList}>
          {doctor.specializations.map((spec) => (
            <li key={spec.id}>{spec.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Doctor;
