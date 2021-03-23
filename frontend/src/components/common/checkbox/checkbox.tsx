import * as React from 'react';
import clsx from 'clsx';
import { ErrorMessage } from '@hookform/error-message';
import { FormRegisterCb, FormErrors } from 'common/types';

import styles from './styles.module.scss';

interface Props {
  name: string;
  value?: string;
  label: string;
  isDisabled?: boolean;
  hasHiddenLabel?: boolean;
  errors: FormErrors;
  register: FormRegisterCb;
}

const Checkbox: React.FC<Props> = ({
  name,
  value,
  label,
  isDisabled,
  hasHiddenLabel,
  errors,
  register,
}) =>{
  const hasError = Boolean(errors[name]);

  return (
    <label className={clsx(styles.checkboxRow, hasError && styles.error)}>
      <input
        disabled={isDisabled}
        name={name}
        value={value}
        className={styles.checkboxInput}
        type="checkbox"
        ref={register}
      />
      {hasHiddenLabel ? (
        <>
          <span className={styles.checkboxLabel}></span>
          <span className="visually-hidden">{label}</span>
        </>
      ) : (
        <span className={clsx(styles.checkboxLabel, hasHiddenLabel && 'visually-hidden')}>{label}</span>
      )}
      <ErrorMessage errors={errors} as="span" name={name} />
    </label>
  );
};

export default Checkbox;
