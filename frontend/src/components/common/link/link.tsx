import * as React from 'react';
import { NavLink as AppLink } from 'react-router-dom';
import { Props } from './common/types';
import styles from './link.module.scss';

const Link: React.FC<Props> = ({ children, to }) => (
  <AppLink to={to} activeClassName={styles.active}>
    {children}
  </AppLink>
);

export default Link;
