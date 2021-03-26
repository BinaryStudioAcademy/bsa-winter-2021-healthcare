import * as React from 'react';
import clsx from 'clsx';
import { NoDataLabel } from 'common/enums';

import styles from './styles.module.scss';

interface Props {
  label?: string;
  className?: string;
}

const NoDataPlaceholder: React.FC<Props> = ({ label = NoDataLabel.IS_EMPTY, className }) => (
  <div className={clsx(styles.noData, className)}>
    {label}
  </div>
);

export default NoDataPlaceholder;
