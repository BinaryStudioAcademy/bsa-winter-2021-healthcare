import * as React from 'react';
import clsx from 'clsx';
import { Icon } from 'common/enums';
import styles from './styles.module.scss';

interface Props {
  icon: Icon;
  title: string;
}

const Details: React.FC<Props> = ({ icon, title, children }) => {
  return (
    <details className={styles.commonFilter}>
      <summary className={styles.filterInfo}>
        <div className={clsx(styles[icon], styles.iconWrapper)}></div>
        <div className={styles.filterName}>{title}</div>
      </summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
};

export default Details;
