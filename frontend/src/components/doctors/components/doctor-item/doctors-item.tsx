import * as React from 'react';
import { IUserTypeDoctor } from 'common/interfaces';
import { Card } from 'components/common';
import { AppRoute } from 'common/enums';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { getDefaultAvatar } from 'helpers';

type Props = {
  user: IUserTypeDoctor;
};

const DoctorItem: React.FC<Props> = ({ user }) => {
  return (
    <Card
      title={`${user.name} ${user.surname}`}
      label={user.doctor?.clinic?.clinicType}
      btnHref={`${AppRoute.DOCTOR_DETAILS}/${user.id}`}
      btnLabel="Make an appointment"
      imagePath={user.imagePath ?? getDefaultAvatar(user)}
    >
      {user.doctor.clinic &&
        <div className={styles.infoItem}>
          <span className={clsx(styles.icon, styles.location)}></span>
          <span className={styles.text}>{`${user.doctor.clinic?.city ? user.doctor.clinic?.city?.name + ', ' : ''}${user.doctor?.clinic?.address}`}</span>
        </div>
      }
      <div className={styles.infoItem}>
        <span className={clsx(styles.icon, styles.phone)}></span>
        <a href={`tel:${user.phone}`} className={styles.text}>{user.phone}</a>
      </div>
      {user.doctor.profession?.name &&
        <div className={styles.infoItem}>
          <span className={clsx(styles.icon, styles.stethoscope)}></span>
          <span className={clsx(styles.text, styles.textCapitalize)}>{user.doctor.profession?.name}</span>
        </div>
      }
    </Card>
  );
};

export default DoctorItem;
