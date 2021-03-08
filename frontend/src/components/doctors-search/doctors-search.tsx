import * as React from 'react';
import DoctorsList from './components/doctors-list/doctors-list';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'common/types';
import { DoctorsActionCreator } from 'store/slices';

import styles from './styles.module.scss';

const DoctorsSearch: React.FC = () => {
  const { doctors } = useSelector(({ doctors }: RootState) => ({
    doctors: doctors.doctors
  }));

  return (
    <div className={styles.doctorsSearchContainer}>
      <div className={styles.searchPannel}></div>
      <DoctorsList doctors={doctors}/>
    </div>
  );
};

export default DoctorsSearch;
