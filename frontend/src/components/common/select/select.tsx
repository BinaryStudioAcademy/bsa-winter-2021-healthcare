import * as React from 'react';
import { useController, Control } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import SelectReact from 'react-select';
import clsx from 'clsx';

import { InputColor } from 'common/enums';
import { IOption } from 'common/interfaces';
import { FormDefaultValue, FormErrors } from 'common/types';

import { inputColorToCssColorValue } from './maps';
import { customStyles } from './styles';

import styles from './styles.module.scss';
import './styles-select.scss';

interface Props {
  name: string;
  label: string;
  hasHiddenLabel: boolean;
  placeholder?: string;
  color: InputColor;
  options: IOption<string>[];
  isDisabled?: boolean;
  control: Control;
  errors: FormErrors;
  defaultValue?: FormDefaultValue;
  onInputChange?: (inputValue: string) => void;
}

const Select: React.FC<Props> = ({
  options,
  name,
  label,
  hasHiddenLabel,
  placeholder,
  color,
  isDisabled,
  control,
  defaultValue,
  errors,
  onInputChange,
}) => {
  const { field } = useController({ name, control, defaultValue });

  const handleSelectChange = (option: IOption<string> | null) => {
    field.onChange(option?.value);
  };
  const handleSelectSetValue = options.find((c) => c.value === field.value);

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
        <SelectReact
          {...field}
          options={options}
          value={handleSelectSetValue}
          onChange={handleSelectChange}
          isDisabled={isDisabled}
          placeholder={placeholder}
          styles={customStyles}
          color={inputColorToCssColorValue[color]}
          className={'selectStyles'}
          classNamePrefix={'selectStyles'}
          isSearchable
          onInputChange={onInputChange}
        />
      </label>
      <ErrorMessage errors={errors} as="span" name={name} />
    </span>
  );
};

export default Select;
