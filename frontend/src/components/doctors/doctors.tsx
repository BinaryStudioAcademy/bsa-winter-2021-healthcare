import React, { useEffect } from 'react';
import DoctorsList from './components/doctors-list/doctors-list';
import { Filtration } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'common/types';
import { DoctorsActionCreator } from 'store/slices';
import { DataStatus } from 'common/enums';

import styles from './styles.module.scss';

const Doctors: React.FC = () => {
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
      <div className={styles.searchPannel}>
        <Filtration />
      </div>
      {dataStatus === DataStatus.PENDING && <div>...Loading</div>}
      {dataStatus === DataStatus.SUCCESS && <DoctorsList users={doctors} />}
    </div>
  );
};

export default Doctors;
