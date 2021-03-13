import * as React from 'react';
import styles from './styles.module.scss';

const CardMain: React.FC = ({children}) => (
  <div className={styles.cardMain}>
    {children}
  </div>
);

export { CardMain };
