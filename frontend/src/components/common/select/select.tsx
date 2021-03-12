import * as React from 'react';
import { useController, Control } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import clsx from 'clsx';
import { IOption } from 'common/interfaces';
import { InputColor } from 'common/enums';
import { FormDefaultValue, FormErrors } from 'common/types';

import styles from './styles.module.scss';

interface Props {
  name: string;
  label: string;
  hasHiddenLabel: boolean;
  placeholder?: string;
  color: InputColor;
  options: IOption<string>[];
  isDisabled?: boolean;
  control: Control;
  errors?: FormErrors
  defaultValue?: FormDefaultValue;
}

const Select: React.FC<Props> = ({ options, name, label, hasHiddenLabel, placeholder, color, isDisabled, control, defaultValue, errors }) => {
  const { field, meta: { invalid } } = useController({ name, control, defaultValue });

  return (
    <span className={styles.inputControl}>
      <label className={styles.label}>
        <span className={clsx(styles.labelText, hasHiddenLabel && 'visually-hidden')}>{label}</span>
        <select
          {...field}
          disabled={isDisabled}
          placeholder={placeholder}
          className={clsx(styles.select, styles[color], invalid && styles.error)}
        >
          {
            options.map(option => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))
          }
        </select>
      </label>
      <ErrorMessage errors={errors} as="span" name={name} />
    </span>
  );
}

export default Select;
