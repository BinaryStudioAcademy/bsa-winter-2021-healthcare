import * as React from 'react';
import DoctorItem from '../doctor-item/doctors-item';
import { IUserTypeDoctor } from '../../common/interfaces';

import styles from './styles.module.scss';

type Props = {
  doctors:IUserTypeDoctor[]
}

const DoctorsList: React.FC<Props> = ({doctors}) => {

  return (
    <div className={styles.doctorsListContainer}>
      {doctors.map(doctor => <DoctorItem key={doctor.id} doctor={doctor} />)}
    </div>
  );
};

export default DoctorsList;
