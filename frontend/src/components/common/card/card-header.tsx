import * as React from 'react';
import styles from './styles.module.scss';

const CardHeader: React.FC = ({children}) => (
  <div className={styles.cardHeader}>
    {children}
  </div>
);

export { CardHeader };
