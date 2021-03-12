import { IClinic } from 'common/interfaces';
import * as React from 'react';
import styles from './clinic.module.scss';

type Props = {
  clinic: IClinic
}

const Clinic: React.FC<Props> = ({ clinic }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.photoContainer}>
        <img src={clinic.imagePath} height="199" alt="Clinic image"/>
      </div>
      <div className={styles.mainContent}>
        <b>{clinic.name}</b>
        <div className={styles.clinicType}>{clinic.clinicType}</div>
        <p>{clinic.address}</p>
      </div>
    </div>
  )
}

export default Clinic;
