import * as React from 'react';
import styles from './styles.module.scss';

interface CheckboxType {
  options: Array<string>;
}

export const Checkbox: React.FC<CheckboxType> = ({ options }) => {
  return (
    <div>
      {
        options.map(typeOfDoctor => {
          return (
            <p className={styles.checkboxRow}
              key={typeOfDoctor}>
              <input
                id={typeOfDoctor}
                className={styles.checkboxInput}
                type="checkbox"
                name={typeOfDoctor}
                value={typeOfDoctor}
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
