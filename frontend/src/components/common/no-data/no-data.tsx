import * as React from 'react';
import clsx from 'clsx';
import { NoDataLabels } from 'common/enums';

import styles from './styles.module.scss';

interface Props {
  label?: string;
  className?: string;
}

const NoData: React.FC<Props> = ({ label = NoDataLabels.IS_EMPTY, className }) => (
  <div className={clsx(styles.noData, className)}>
    {label}
  </div>
);

export default NoData;
