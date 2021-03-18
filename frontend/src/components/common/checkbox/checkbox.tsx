import * as React from 'react';
import clsx from 'clsx';
import { useController, Control } from 'react-hook-form';
import { FormDefaultValue } from 'common/types';

import styles from './styles.module.scss';

interface Props {
  name: string;
  label: string;
  isDisabled?: boolean;
  control: Control;
  defaultValue?: FormDefaultValue;
}

const Checkbox: React.FC<Props> = ({
  name,
  label,
  isDisabled,
  control,
  defaultValue,
}) => {
  const {
    field,
    meta: { invalid },
  } = useController({ name, control, defaultValue });
  return (
    <label className={clsx(styles.checkboxRow, invalid && styles.error)}>
      <input
        disabled={isDisabled}
        name={name}
        value={field.value}
        className={styles.checkboxInput}
        type="checkbox"
        onChange={() => field.onChange(field.value ? false : label)}
      />
      <span className={styles.checkboxLabel}>{label}</span>
    </label>
  );
};

export default Checkbox;
