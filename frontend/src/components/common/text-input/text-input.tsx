import * as React from 'react';
import { useController, Control } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import clsx from 'clsx';
import { InputType, InputColor } from 'common/enums';
import { FormDefaultValue, FormErrors } from 'common/types';

import styles from './styles.module.scss';

interface Props {
  name: string;
  type: InputType;
  label: string;
  hasHiddenLabel: boolean;
  placeholder?: string;
  color: InputColor;
  isDisabled?: boolean;
  control: Control;
  errors: FormErrors;
  defaultValue?: FormDefaultValue;
}

const TextInput: React.FC<Props> = ({
  name,
  type,
  label,
  hasHiddenLabel,
  placeholder,
  color,
  isDisabled,
  control,
  defaultValue,
  errors,
}) => {
  const {
    field,
    meta: { invalid },
  } = useController({ name, control, defaultValue });

  return (
    <span className={styles.inputControl}>
      <label className={styles.label}>
        <span
          className={clsx(
            styles.labelText,
            hasHiddenLabel && 'visually-hidden',
          )}
        >
          {label}
        </span>
        <input
          {...field}
          type={type}
          disabled={isDisabled}
          placeholder={placeholder}
          className={clsx(
            styles.textInput,
            styles[color],
            invalid && styles.error,
            type === InputType.SEARCH && styles.searchIcon,
          )}
        />
      </label>
      <ErrorMessage errors={errors} as="span" name={name} />
    </span>
  );
};
export default TextInput;
