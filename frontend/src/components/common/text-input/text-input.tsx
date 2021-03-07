import clsx from 'clsx';
import { TextInputNames } from 'common/enums';
import * as React from 'react';
import styles from './styles.module.scss';

interface TextInputTypes {
  [TextInputNames.NAME]: string;
  [TextInputNames.SURNAME]: string;
  [TextInputNames.EMAIL]: string;
  [TextInputNames.PHONE]: string;
  [TextInputNames.PASSWORD]: string;
  [TextInputNames.PASSWORD_REPEAT]: string;
}

const DEFAULT_VALUES: TextInputTypes = {
  [TextInputNames.NAME]: '',
  [TextInputNames.SURNAME]: '',
  [TextInputNames.EMAIL]: '',
  [TextInputNames.PHONE]: '',
  [TextInputNames.PASSWORD]: '',
  [TextInputNames.PASSWORD_REPEAT]: '',
};

const INPUT_TYPES: TextInputTypes = {
  [TextInputNames.NAME]: 'text',
  [TextInputNames.SURNAME]: 'text',
  [TextInputNames.EMAIL]: 'email',
  [TextInputNames.PHONE]: 'phone',
  [TextInputNames.PASSWORD]: 'password',
  [TextInputNames.PASSWORD_REPEAT]: 'password',
};

interface TextInputProps {
  filedName: keyof TextInputTypes;
  isValid?: boolean | null;
  onChange(value: string): void;
}

export const TextInput: React.FC<TextInputProps> = ({onChange, filedName, isValid='null'}) => {
  const [
    inputValues,
    setInputValue,
  ] = React.useState<TextInputTypes>(DEFAULT_VALUES);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;
    setInputValue({
      ...inputValues,
      [name]: value,
    });
    onChange(value);
  };

  const validationStyles: string = (isValid === true)
    ? styles.validField
    : (isValid === false)
    ? styles.invalidField
    : '';

  return (
    <label>
      <p className={styles.labelText}>{filedName}</p>
      <input
        className={clsx(styles.textInput, validationStyles)}
        type={INPUT_TYPES[filedName]}
        name={filedName}
        placeholder={filedName}
        value={inputValues[filedName]}
        onChange={handleChange}
      />
    </label>
  );
}
