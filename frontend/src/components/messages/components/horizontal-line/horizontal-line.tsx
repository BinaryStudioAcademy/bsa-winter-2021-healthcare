import * as React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props {
  label?: string;
  className?: string;
}

const HorizontalLine: React.FC<Props> = ({ label, className }) => (
  <div className={clsx(styles.horizontalLine, className)}>
    {label && <span>{ label }</span>}
  </div>
);

export default HorizontalLine;
