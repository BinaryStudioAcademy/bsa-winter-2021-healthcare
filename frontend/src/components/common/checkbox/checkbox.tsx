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
  <p className={clsx(styles.checkboxRow, hasError && styles.error)}>
    <input
      onChange={onChange}
      checked={isChecked}
      disabled={isDisabled}
      name={name}
      id={name}
      className={styles.checkboxInput}
      type="checkbox"
    />
    <label
      htmlFor={name}
      className={styles.checkboxLabel}
      >
      {label}
    </label>
  </p>
);

export default Checkbox;
