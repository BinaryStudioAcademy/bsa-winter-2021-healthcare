import clsx from 'clsx';
import { InputChangeCallback } from 'common/types';
import * as React from 'react';
import styles from './styles.module.scss';

interface Props {
  onChange: InputChangeCallback;
  isChecked: boolean;
  isDisabled?: boolean;
  hasError?: boolean;
  name: string;
  label: string;
}

const Checkbox: React.FC<Props> = ({ isChecked, isDisabled, hasError, name, label, onChange }) => (
  <label className={clsx(styles.checkboxRow, hasError && styles.error)}>
    <input
      onChange={onChange}
      checked={isChecked}
      disabled={isDisabled}
      name={name}
      className={styles.checkboxInput}
      type="checkbox"
    />
    <span className={styles.checkboxLabel}>
      {label}
    </span>
  </label>
);

export default Checkbox;
