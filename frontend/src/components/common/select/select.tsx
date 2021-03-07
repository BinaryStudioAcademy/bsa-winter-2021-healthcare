import * as React from 'react';
import styles from './styles.module.scss';

interface SelectType {
  options: Array<string>;
  onChange(value: string): void;
}

export const Select: React.FC<SelectType> = ({ onChange, options }) => {
  return (
    <select className={styles.select} onChange={(e) => onChange(e.target.value)}>
      {
        options.map(option => {
          return <option value={option.toLowerCase()} key={option}>{option}</option>;
        })
      }
    </select>
  );
}
