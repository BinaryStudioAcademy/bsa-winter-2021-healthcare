import * as React from 'react';
import clsx from 'clsx';
import { FormRegisterCb, FormErrors } from 'common/types';

import styles from './styles.module.scss';

interface Props {
  name: string;
  value?: string;
  label: string;
  isDisabled?: boolean;
  errors: FormErrors;
  register: FormRegisterCb;
}

const Checkbox: React.FC<Props> = ({
  name,
  value,
  label,
  isDisabled,
  errors,
  register,
}) =>{
  return (
    <label className={clsx(styles.checkboxRow, errors[name] && styles.error)}>
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
};

export default Checkbox;
