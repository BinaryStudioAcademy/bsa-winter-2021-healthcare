import * as React from 'react';
import styles from './styles.module.scss';

const Card: React.FC = ({children}) => (
  <div className={styles.cardContainer}>
    {children}
  </div>
);

export { Card };
