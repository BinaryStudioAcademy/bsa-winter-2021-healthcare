import { IClinic } from 'common/interfaces';
import { Card } from 'components/common';
import * as React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { AppRoute } from 'common/enums';

type Props = {
  clinic: IClinic;
};

const Clinic: React.FC<Props> = ({ clinic }) => {
  return (
    <Card
      title={clinic.name}
      label={clinic?.clinicType}
      btnLabel="More details"
      btnHref={AppRoute.CLINIC}
      imagePath={clinic.imagePath}
    >
      <div className={styles.infoItem}>
        <span className={clsx(styles.icon, styles.location)}></span>
        <span className={styles.text}>{clinic.address}</span>
      </div>
    </Card>
  );
};

export default Clinic;
