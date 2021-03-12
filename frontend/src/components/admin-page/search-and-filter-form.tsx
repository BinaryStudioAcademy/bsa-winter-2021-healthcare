import * as React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

const AdminPageFilter: React.FC = () => {
  return (
    <div>
      <input
        className={clsx(styles.inpt, styles.inptHght)}
        type="text"
        placeholder="Search by name or email"
      />
      <input
        className={clsx(styles.inpt, styles.margLeft, styles.inptHght)}
        type="text"
        placeholder="Search by phone"
      />
      <button className={clsx(styles.button, styles.margLeft, styles.inptHght)}>
        Filters
      </button>
    </div>
  );
};

export default AdminPageFilter;
