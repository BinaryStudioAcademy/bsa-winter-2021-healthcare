import * as React from 'react';
import clsx from 'clsx';
import { useController, Control } from "react-hook-form";
import { InputChangeCallback } from 'common/types';
import { FormDefaultValue } from 'common/types';

import styles from './styles.module.scss';

interface Props {
  onChange: InputChangeCallback;
  name: string;
  label: string;
  isChecked: boolean;
  isDisabled?: boolean;
  control: Control;
  defaultValue?: FormDefaultValue;
}

const Checkbox: React.FC<Props> = ({ name, label, isChecked, isDisabled, control, defaultValue, onChange }) => {
  const { field, meta: { invalid } } = useController({ name, control, defaultValue });

  return (
  <label className={clsx(styles.checkboxRow, invalid && styles.error)}>
    <input
      {...field}
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
)};

export default Checkbox;
