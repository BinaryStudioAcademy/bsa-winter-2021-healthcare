import * as React from 'react';
import styles from './clinic.module.scss';
// import iconLogo from 'assets/images/icon-logo.svg';
// import clsx from 'clsx';

const Clinic: React.FC = () => {
  // const currentYear = new Date().getFullYear();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.photoContainer}>photo</div>
      <div className={styles.mainContent}>
        <b>Clinics name</b>
        <div className={styles.clinicType}>clinicType</div>
        <p>address</p>
      </div>
    </div>
  )
}

export default Clinic;
