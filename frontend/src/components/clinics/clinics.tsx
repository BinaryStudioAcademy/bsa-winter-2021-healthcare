import * as React from 'react';
import Clinic from './components/clinic/clinic';
import DoctorsFiltration from '../doctors-filtration-panel/doctors-filtration-panel';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'common/types';
import { ClinicsActionCreator } from 'store/slices';
import styles from './styles.module.scss';

const Clinics: React.FC = () => {
  const { clinics } = useSelector(({ clinics }: RootState) => ({
    clinics: clinics.clinics,
  }));
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ClinicsActionCreator.getClinics());
  }, []);

  return (
    <div className={styles.wrapper}>
      <DoctorsFiltration />
      <div className={styles.clinicsContainer}>
        {clinics.map((clinic) => (
          <Clinic key={clinic.id} clinic={clinic} />
        ))}
      </div>
    </div>
  );
};

export default Clinics;
