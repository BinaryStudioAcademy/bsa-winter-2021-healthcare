import * as React from 'react';
import { RootState } from 'common/types';
import { useDispatch, useSelector } from 'react-redux';
import { DoctorsActionCreator } from 'store/slices';
import { DataStatus } from 'common/enums';
import { useParams } from 'react-router-dom';
import { ParamTypes } from './common/interfaces';
import phoneIcon from 'assets/images/phone.svg';
import checkIcon from 'assets/images/icons/check.svg';

import styles from './styles.module.scss';

const DoctorDetails: React.FC = () => {

  const { doctorDetails, dataStatus } = useSelector(({ doctors }: RootState) => ({
    doctorDetails: doctors.doctorDetails,
    dataStatus: doctors.dataStatus,
  }));
  const dispatch = useDispatch();
  const { id } = useParams<ParamTypes>();

  React.useEffect(() => {
    dispatch(DoctorsActionCreator.getDoctorDetailsAsync(id))
  }, [])

  if (dataStatus === DataStatus.PENDING || !doctorDetails) {
    return <div>...Loading</div>;
  }

  return (
    <div className={styles.doctorsDetailsContainer}>
      <div className={styles.personalDataContainer}>
        <img className={styles.doctorImage} src={doctorDetails.imagePath} width="58" height="60" loading="lazy"
          alt={doctorDetails.name} />
        <div className={styles.personalDataBody}>
          <span className={styles.department}>{doctorDetails.doctor.department}</span>
          <div className={styles.phone}>
            <img src={phoneIcon} width="22" height="22" loading="lazy" alt="phone-icon" />
            <span className={styles.phoneNumber}>{doctorDetails.phone}</span>
          </div>
          <span className={styles.name}>{doctorDetails.name} {doctorDetails.surname}</span>
        </div>
      </div>
      <div className={styles.aboutContainer}>
        <span className={styles.aboutTitle}>About {doctorDetails.name} {doctorDetails.surname}</span>
        <div className={styles.aboutBody}>{doctorDetails.doctor.about}</div>
      </div>

      <div className={styles.conditionsContainer}>
        <div className={styles.conditionsTitle}>
          <img src={checkIcon} width="22" height="22" loading="lazy" alt="check-icon" />
          <span className={styles.titleText}>Conditions Treated</span>
        </div>
        <ul className={styles.conditionsList}>
          {doctorDetails.specializations.map(spec =>
            <li key={spec.id}>{spec.text}</li>,
          )}
        </ul>
      </div>
    </div>
  );
};

export default DoctorDetails;
