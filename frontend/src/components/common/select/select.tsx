import { SelectChangeCallback } from 'common/types';
import * as React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { IOption } from 'common/interfaces';

interface Props {
  options: IOption<string>[];
  isDisabled?: boolean;
  hasError?: boolean;
  label: string;
  onChange: SelectChangeCallback;
}

const Select: React.FC<Props> = ({ options, label, isDisabled, hasError, onChange }) => (
  <label>
    <span className='visually-hidden'>{label}</span>
    <select className={clsx(styles.select, hasError && styles.error)} onChange={onChange} disabled={isDisabled}>
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
);

export default Select;
