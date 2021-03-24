import * as React from 'react';
import clsx from 'clsx';
import { IClinic } from 'common/interfaces';
import { Card } from 'components/common';
import styles from './styles.module.scss';
import { AppRoute } from 'common/enums';
import { ClinicTypeToReadable } from 'common/maps';

type Props = {
  clinic: IClinic;
};

const Clinic: React.FC<Props> = ({ clinic }) => {
  return (
    <Card
      title={clinic?.name}
      label={ClinicTypeToReadable[clinic?.clinicType]}
      btnLabel="More details"
      btnHref={AppRoute.CLINIC}
      imagePath={clinic?.imagePath}
      alt={clinic?.name}
    >
      <div className={styles.infoItem}>
        <span className={clsx(styles.icon, styles.location)}></span>
        <span className={styles.text}>{clinic?.address}</span>
      </div>
    </Card>
  );
};

export default Clinic;
