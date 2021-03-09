import clsx from 'clsx';
import { InputChangeCallback } from 'common/types';
import * as React from 'react';
import styles from './styles.module.scss';

interface Props {
  onChange: InputChangeCallback;
  isChecked: boolean;
  isDisabled: boolean;
  hasError: boolean;
  name: string;
  value: string;
  label: string;
}

const Radio: React.FC<Props> = ({ isChecked, isDisabled, hasError, name, value, label, onChange }) => (
  <label
    className={clsx(styles.radioLabel,
      hasError && styles.error,
      isChecked && styles.isChecked)
    }
  >
    {label}
    <input
      onChange={onChange}
      checked={isChecked}
      disabled={isDisabled}
      name={name}
      value={value}
      className={styles.radioInput}
      type="radio"
    />
  </label>
);

export default Radio;
