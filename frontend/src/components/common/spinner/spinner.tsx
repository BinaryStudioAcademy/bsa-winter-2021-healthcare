import * as React from 'react';
import styles from './spinner.module.scss';

const Spinner: React.FC = () => (
  <div className={styles.spinnerContainer}>
    <div className={styles.spinner}></div>
  </div>
);

export default Spinner;
