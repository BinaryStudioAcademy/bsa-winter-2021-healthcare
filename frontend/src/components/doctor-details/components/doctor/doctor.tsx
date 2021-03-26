import * as React from 'react';
import { IDoctorDetails } from 'common/interfaces';
import phoneIcon from 'assets/images/phone.svg';
import checkIcon from 'assets/images/icons/check.svg';
import styles from './styles.module.scss';
import { getDefaultAvatar } from 'helpers';
import { DOCTOR_SPECIALIZATIONS, SPECIALIZATIONS_COUNT } from './common';
import { getRandomItem, getRandomItems } from 'helpers/array';
import { DOCTOR_DESCRIPTIONS } from './common/constants/doctor-descriptions';

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
            <a href={`tel:${doctor.phone}`} className={styles.phoneNumber}>
              {doctor.phone}
            </a>
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
        <div className={styles.aboutBody}>
          {getRandomItem(DOCTOR_DESCRIPTIONS)}
        </div>
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
          {getRandomItems(DOCTOR_SPECIALIZATIONS, SPECIALIZATIONS_COUNT).map(
            (spec) => (
              <li className={styles.conditionsItem} key={spec}>
                {spec}
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
};

export default Doctor;
