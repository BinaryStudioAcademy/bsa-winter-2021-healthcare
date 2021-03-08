import * as React from 'react';
import DoctorItem from '../doctor-item/doctors-item'

import styles from './styles.module.scss';

type Doctor = {
  id:string
  name:string
  imagePath:string
  department: string
  clinic: string
  adress: string
  phone: string
}
type DocListProps = {
  doctors:Doctor[]
}

const DoctorsList: React.FC<DocListProps> = ({doctors}) => {

  return (
    <div className={styles.doctorsListContainer}>
      {doctors.map(doctor => <DoctorItem key={doctor.id} doctor={doctor} />)}
    </div>
  );
};

export default DoctorsList;
