import clsx from 'clsx';
import { InputType } from 'common/enums';
import { InputChangeCallback } from 'common/types';
import * as React from 'react';
import styles from './styles.module.scss';

interface Props {
  type: InputType;
  label: string;
  name: string;
  value: string;
  hasError: boolean;
  isDisabled: boolean;
  onChange: InputChangeCallback;
}

const TextInput: React.FC<Props> = ({type, isDisabled, label, name, value, hasError, onChange}) => (
  <label className={styles.label}>
    <p className={styles.labelText}>{label}</p>
    <input
      className={clsx(styles.textInput, hasError && styles.error)}
      disabled={isDisabled}
      type={type}
      name={name}
      placeholder={name}
      value={value}
      onChange={onChange}
    />
  </label>
);

export default TextInput;
