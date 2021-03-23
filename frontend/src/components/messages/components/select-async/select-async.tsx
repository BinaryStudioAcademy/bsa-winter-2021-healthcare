import * as React from 'react';
import { useController, Control } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import SelectReactAsync from 'react-select/async';
import clsx from 'clsx';

import { InputColor } from 'common/enums';
import { IOption } from 'common/interfaces';
import { FormDefaultValue, FormErrors } from 'common/types';

import { inputColorToCssColorValue } from './maps';
import { customStyles } from './styles';

import styles from './styles.module.scss';
import './styles-select-async.scss';

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  color: InputColor;
  loadOptions: any;
  isDisabled?: boolean;
  control: Control;
  errors: FormErrors;
  defaultValue?: FormDefaultValue;
}

let selectedOption: IOption<string> | null = null;

const SelectAsync: React.FC<Props> = ({
  name,
  label,
  placeholder,
  color,
  isDisabled,
  loadOptions,
  control,
  defaultValue,
  errors,
}) => {
  const { field } = useController({ name, control, defaultValue });

  const handleSelectChange = (option: IOption<string> | null) => {
    field.onChange(option?.value);
    selectedOption = option;
  };

  return (
    <span className={styles.inputControl}>
      <label className={styles.label}>
        <span className={clsx(styles.labelText, !label && 'visually-hidden')}>
          {label}
        </span>
        <SelectReactAsync
          {...field}
          loadOptions={loadOptions}
          value={selectedOption}
          onChange={handleSelectChange}
          isDisabled={isDisabled}
          placeholder={placeholder}
          styles={customStyles}
          color={inputColorToCssColorValue[color]}
          className={'selectAsyncStyles'}
          classNamePrefix={'selectAsyncStyles'}
          isSearchable
        />
      </label>
      <ErrorMessage errors={errors} as="span" name={name} />
    </span>
  );
};

export default SelectAsync;
