import * as React from 'react';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

import styles from './styles.module.scss';

interface Props {
  name: string;
  value: string;
  label: string;
  isDisabled?: boolean;
  register: ReturnType<typeof useForm>['register'];
}

const Checkbox: React.FC<Props> = ({
  name,
  value,
  label,
  isDisabled,
  register,
}) =>(
  <label className={clsx(styles.checkboxRow)}>
    <input
      disabled={isDisabled}
      name={name}
      value={value}
      className={styles.checkboxInput}
      type="checkbox"
      ref={register}
    />
    <span className={styles.checkboxLabel}>{label}</span>
  </label>
);

export default Checkbox;
