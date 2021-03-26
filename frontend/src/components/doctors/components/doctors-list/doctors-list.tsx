import * as React from 'react';
import { NoDataPlaceholder } from 'components/common';
import DoctorItem from '../doctor-item/doctors-item';
import { IUserTypeDoctor } from 'common/interfaces';
import { NoDataLabel } from 'common/enums';

import styles from './styles.module.scss';

type Props = {
  users: IUserTypeDoctor[];
};

const DoctorsList: React.FC<Props> = ({ users }) => {

  const hasUsers = Boolean(users.length);

  return (
    <div className={styles.doctorsListContainer}>

      {hasUsers
        ? users.map(user => <DoctorItem key={user.id} user={user} />)
        : <NoDataPlaceholder label={NoDataLabel.NO_DOCTORS} />}

    </div>
  );
};

export default DoctorsList;
