import clsx from 'clsx';
import { InputType, InputColor } from 'common/enums';
import * as React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import styles from './styles.module.scss';


import { useController, Control, UseControllerOptions, DeepMap, FieldValues, FieldError } from "react-hook-form";

interface Props {
  name: string;
  type: InputType;
  label: string;
  placeholder?: string;
  color: InputColor;
  isDisabled?: boolean;
  control: Control;
  errors: DeepMap<FieldValues, FieldError>;
  defaultValue?: UseControllerOptions<FieldValues>;
}

const TextInput: React.FC<Props> = ({ name, type, label, placeholder, color, isDisabled, control, defaultValue, errors }) => {
  const { field, meta } = useController({ name, control, defaultValue });

  return (
    <div className={styles.inputBlock}>
      <label className={styles.label}>
        <span className={styles.labelText}>{label}</span>
        <input
          {...field}
          type={type}
          disabled={isDisabled}
          placeholder={placeholder}
          className={clsx(
            styles.textInput,
            styles[color],
            meta.invalid && styles.error,
            type == InputType.SEARCH && styles.searchIcon)}
        />
      </label>
      <ErrorMessage errors={errors} as="span" name={name} />
    </div>
  );
}
export default TextInput;
