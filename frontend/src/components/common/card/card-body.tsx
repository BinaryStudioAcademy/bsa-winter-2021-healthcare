import * as React from 'react';
import styles from './styles.module.scss';

const CardBody: React.FC = ({children}) => (
  <div className={styles.cardBody}>
    {children}
  </div>
);

export { CardBody };
