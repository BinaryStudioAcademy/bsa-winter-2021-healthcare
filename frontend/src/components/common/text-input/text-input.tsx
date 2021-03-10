import clsx from 'clsx';
import { InputType, InputColor } from 'common/enums';
import { InputChangeCallback } from 'common/types';
import * as React from 'react';
import styles from './styles.module.scss';

interface Props {
  type: InputType;
  color: InputColor;
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  hasError?: boolean;
  isDisabled?: boolean;
  onChange: InputChangeCallback;
}

const TextInput: React.FC<Props> = ({type, color, isDisabled, label, name, value, placeholder, hasError, onChange}) => (
  <label className={styles.label}>
    <span className={styles.labelText}>{label}</span>
    <input
      className={clsx(
        styles.textInput,
        styles[color],
        hasError && styles.error,
        type == InputType.SEARCH && styles.searchIcon)}
      disabled={isDisabled}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </label>
);

export default TextInput;
