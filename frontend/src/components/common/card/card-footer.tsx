import * as React from 'react';
import styles from './styles.module.scss';

const CardFooter: React.FC = ({children}) => (
  <div className={styles.cardFooter}>
    {children}
  </div>
);

export { CardFooter };
