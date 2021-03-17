import React, { useEffect } from 'react';
import DoctorsList from './components/doctors-list/doctors-list';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'common/types';
import { DoctorsActionCreator } from 'store/slices';
import { DataStatus } from 'common/enums';

import styles from './styles.module.scss';

const DoctorsSearch: React.FC = () => {
  const { doctors, dataStatus } = useSelector(({ doctors }: RootState) => ({
    doctors: doctors.doctors,
    dataStatus: doctors.dataStatus,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(DoctorsActionCreator.getDoctorsAsync());
  }, []);

  return (
    <div className={styles.doctorsSearchContainer}>
      <div className={styles.searchPannel}></div>
      {dataStatus === DataStatus.PENDING && <div>...Loading</div>}
      {dataStatus === DataStatus.SUCCESS && <DoctorsList users={doctors} />}
    </div>
  );
};

export default DoctorsSearch;
