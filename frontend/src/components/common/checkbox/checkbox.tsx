import * as React from 'react';
import clsx from 'clsx';
import { useController, Control } from "react-hook-form";
import { InputChangeCallback } from 'common/types';
import { FormDefaultValue } from 'common/types';

import styles from './styles.module.scss';

interface Props {
  name: string;
  label: string;
  isDisabled?: boolean;
  control: Control;
  defaultValue?: FormDefaultValue;
}

const Checkbox: React.FC<Props> = ({ name, label, isDisabled, control, defaultValue }) => {
  const { field, meta: { invalid } } = useController({ name, control, defaultValue });

  return (
  <label className={clsx(styles.checkboxRow, invalid && styles.error)}>
    <input
      {...field}
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
