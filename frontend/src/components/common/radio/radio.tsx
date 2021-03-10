import clsx from 'clsx';
import { IOption } from 'common/interfaces';
import { InputChangeCallback } from 'common/types';
import * as React from 'react';
import styles from './styles.module.scss';

interface Props {
  options: IOption<string>[];
  value: string;
  isDisabled?: boolean;
  hasError?: boolean;
  name: string;
  onChange: InputChangeCallback;
}

const Radio: React.FC<Props> = ({ options, value, isDisabled, hasError, name, onChange }) => (
  <div className={styles.radioContainer}>
    {
      options.map(option => (
          <label
            key={option.value}
            className={clsx(styles.radioLabel,
              hasError && styles.error,
              option.value === value && styles.isChecked)
            }
          >
            {option.label}
            <input
              onChange={onChange}
              checked={option.value === value}
              disabled={isDisabled}
              name={name}
              value={option.value}
              className={styles.radioInput}
              type="radio"
            />
          </label>
        )
      )
    }
  </div>
);

export default Radio;
