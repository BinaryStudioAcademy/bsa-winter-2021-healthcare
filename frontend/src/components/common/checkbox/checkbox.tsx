import * as React from 'react';
import styles from './styles.module.scss';

interface CheckboxType {
  options: Array<string>;
  onChange(value: string): void;
}

export const Checkbox: React.FC<CheckboxType> = ({ onChange, options }) => {
  return (
    <div>
      {
        options.map(typeOfDoctor => {
          return (
            <p className={styles.checkboxRow}
              key={typeOfDoctor}>
              <input
                onChange={(e) => onChange(e.target.value)}
                id={typeOfDoctor}
                className={styles.checkboxInput}
                type="checkbox"
                name={typeOfDoctor}
                value={typeOfDoctor.toLowerCase()}
              />
              <label
                htmlFor={typeOfDoctor}
                className={styles.checkboxLabel}
                >
                {typeOfDoctor}
              </label>
            </p>
          );
        })
      }
    </div>
  );
}
