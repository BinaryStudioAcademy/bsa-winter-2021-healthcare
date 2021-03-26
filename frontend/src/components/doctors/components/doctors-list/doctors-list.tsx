import * as React from 'react';
import { NoData } from 'components/common';
import DoctorItem from '../doctor-item/doctors-item';
import { IUserTypeDoctor } from 'common/interfaces';
import { NoDataLabels } from 'common/enums';

import styles from './styles.module.scss';

type Props = {
  users: IUserTypeDoctor[];
};

const DoctorsList: React.FC<Props> = ({ users }) => {
  return (
    <div className={styles.doctorsListContainer}>

      {!users.length && <NoData label={NoDataLabels.NO_DOCTORS} />}

      {users.map((user) => (
        <DoctorItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default DoctorsList;
