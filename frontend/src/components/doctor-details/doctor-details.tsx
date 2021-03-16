import * as React from 'react';
import phoneIcon from 'assets/images/icons/phone.svg';
import checkIcon from 'assets/images/icons/check.svg';
import { RootState } from 'common/types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { DoctorsActionCreator } from 'store/slices';
import styles from './styles.module.scss';
import { DataStatus } from 'common/enums';
import { useLocation } from 'react-router-dom';

const DoctorDetails: React.FC = () => {

  const { doctorDetails, dataStatus } = useSelector(({ doctors }: RootState) => ({
    doctorDetails: doctors.doctorDetails,
    dataStatus: doctors.dataStatus
  }));
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(DoctorsActionCreator.getDoctorDetailsAsync(pathname))
  }, [])

  return (
    <div className={styles.doctorsDetailsContainer}>
      {dataStatus === DataStatus.PENDING && <div>...Loading</div>}
      {dataStatus === DataStatus.SUCCESS &&
        <>
          <div className={styles.personalDataContainer}>
            <img className={styles.doctorImage} src={doctorDetails.imagePath} alt={doctorDetails.name} />
            <div className={styles.personalDataBody}>
              <span className={styles.department}>{doctorDetails.doctor.department}</span>
              <div className={styles.phone}>
                <img src={phoneIcon} alt="phone-icon" />
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
              <img src={checkIcon} alt="check-icon" />
              <span className={styles.titleText}>Conditions Treated</span>
            </div>
            <ul className={styles.conditionsList}>
              {doctorDetails.specializations.map(spec =>
                <li key={spec.id}>{spec.text}</li>
              )}
            </ul>
          </div>
        </>}
    </div>
  );
};

export default DoctorDetails;
