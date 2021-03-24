import React from 'react';
import { useController, Control } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import DatePicker from 'react-datepicker';
import clsx from 'clsx';
import { InputColor } from 'common/enums';
import { FormDefaultValue, FormErrors } from 'common/types';

import 'react-datepicker/dist/react-datepicker.min.css';
import './datepicker-custom-styles.scss';
import styles from './styles.module.scss';

interface Props {
  name: string;
  label: string;
  hasHiddenLabel: boolean;
  placeholder?: string;
  color: InputColor;
  isDisabled?: boolean;
  control: Control;
  errors: FormErrors;
  defaultValue?: FormDefaultValue;
  isInline?:boolean;
}

const DateInput: React.FC<Props> = ({
  name,
  label,
  hasHiddenLabel,
  placeholder,
  color,
  isDisabled,
  control,
  defaultValue,
  errors,
  isInline = false,
}) => {
  const {
    field,
    meta: { invalid },
  } = useController({ name, control, defaultValue });

  return (
    <span className={styles.inputControl}>
      {isInline ?
        <DatePicker
          {...field}
          selected={field.value}
          inline
          disabled={isDisabled}
          className={styles.select}
          calendarClassName={clsx(
            isDisabled && styles.disabled,
            styles[color],
            invalid && styles.error,
          )}
        />
        :
        <label className={styles.label}>
          <span
            className={clsx(
              styles.labelText,
              hasHiddenLabel && 'visually-hidden',
            )}
          >
            {label}
          </span>
          <DatePicker
            {...field}
            selected={field.value}
            dropdownMode="select"
            placeholderText={placeholder}
            disabled={isDisabled}
            className={styles.select}
            calendarClassName={clsx(
              isDisabled && styles.disabled,
              styles[color],
              invalid && styles.error,
            )}
          />
        </label>}
      <ErrorMessage errors={errors} as="span" name={name} />
    </span>
  );
};

export default DateInput;
