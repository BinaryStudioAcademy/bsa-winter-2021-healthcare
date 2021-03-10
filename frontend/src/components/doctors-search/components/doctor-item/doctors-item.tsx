import * as React from 'react';
import phoneIcon from 'assets/images/icons/phone.svg';
import locationIcon from 'assets/images/icons/location.svg';
import chatIcon from 'assets/images/icons/chat.svg';
import { IUserTypeDoctor } from 'common/interfaces';
import { ClinicType } from 'common/enums';
import clsx from 'clsx';

import styles from './styles.module.scss';

type Props = {
  doctor:IUserTypeDoctor
}

const DoctorItem: React.FC<Props> = ({doctor}) => {

  const clinicType = doctor.doctors.clinics.clinicType;

  return (
    <div className={styles.doctorsItemContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.doctorImage} src={doctor.imagePath} alt={doctor.name} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoContainerHead}>
          <span className={styles.department}>{doctor.doctors.department}</span>
          <span className={styles.name}>{doctor.name} {doctor.surname}</span>
          <span className={styles.clinicName}>{doctor.doctors.clinics.name}</span>
          <div className={clsx({
            [styles.clinicType]: true,
            [styles.private]: clinicType === ClinicType.PRIVATE,
            [styles.state]: clinicType === ClinicType.STATE
          })}>{doctor.doctors.clinics.clinicType} clinic</div>
        </div>
        <div className={styles.infoContainerBody}>
          <div className={styles.infoItem}>
            <img src={locationIcon} alt="location-icon"/>
            <span className={styles.text}>{doctor.doctors.clinics.address}</span>
          </div>
          <div className={styles.infoItem}>
            <img src={phoneIcon} alt="phone-icon"/>
            <span className={styles.text}>{doctor.phone}</span>
          </div>
        </div>
        <div className={styles.infoContainerButtons}>
          <div className={styles.button}>Make an appointment</div>
          <div className={styles.icon}>
            <img src={chatIcon} alt="chat-icon"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorItem;
