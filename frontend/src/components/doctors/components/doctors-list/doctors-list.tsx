import * as React from 'react';
import DoctorItem from '../doctor-item/doctors-item';
import { IUserTypeDoctor } from 'common/interfaces';

import styles from './styles.module.scss';

type Props = {
  users: IUserTypeDoctor[];
};

const DoctorsList: React.FC<Props> = ({ users }) => {
  return (
    <div className={styles.doctorsListContainer}>
      {users.map((user) => (
        <DoctorItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default DoctorsList;
