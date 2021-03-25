import * as React from 'react';
import clsx from 'clsx';
import { IOption } from 'common/interfaces';
import { FormRegisterCb, FormErrors } from 'common/types';
import { ErrorMessage } from '@hookform/error-message';

import styles from './styles.module.scss';

interface Props {
  options: IOption<string>[];
  value?: string;
  isDisabled?: boolean;
  name: string;
  register: FormRegisterCb;
  errors: FormErrors;
}

const Radio: React.FC<Props> = ({ options, register, value, isDisabled, errors, name }) => {
  const hasError = Boolean(errors[name]);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.radioContainer}>
        {
          options.map(option => (
            <label
              key={option.value}
              className={clsx(styles.radioLabel,
                hasError && styles.error,
                option.value === value && styles.isChecked)
              }
            >
              {option.label}
              <input
                disabled={isDisabled}
                name={name}
                ref={register}
                value={option.value}
                className={styles.radioInput}
                type="radio"
              />
            </label>
          ))
        }
      </div>
      <div className={styles.errorContainer}>
        <ErrorMessage errors={errors} as="span" name={name} />
      </div>
    </div>
  );
};

export default Radio;
