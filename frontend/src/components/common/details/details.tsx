import * as React from 'react';
import styles from './styles.module.scss';

interface Props {
  icon: string;
  title: string;
}

const Details: React.FC<Props> = ({ icon, title, children }) => {
  return (
    <details className={styles.commonFilter}>
      <summary className={styles.filterInfo}>
        <div
          className={styles.icon}
          style={{
            backgroundImage: `url(${icon})`
          }}
        ></div>
        <div className={styles.filterName}>{title}</div>
      </summary>
      <div className={styles.content}>
        {children}
      </div>
    </details>
  )
}

export default Details;
