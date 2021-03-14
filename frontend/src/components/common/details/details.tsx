import * as React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props {
  icon: string;
  title: string;
  children: React.ReactNode;
}

const Details: React.FC<Props> = ({ icon, title, children }) => {
  return (
    <details className={clsx(styles.commonFilter)}>
      <summary className={clsx(styles.filterInfo)}>
        <img src={icon} loading="lazy" alt="Filter icon."/>
        <div className={clsx(styles.filterName)}>{title}</div>
      </summary>
      <div className={clsx(styles.content)}>
        {children}
      </div>
    </details>
  )
}

export default Details;
