import * as React from 'react';
import { NavLink as AppLink } from 'react-router-dom';
import { Props } from './common/types';
import styles from './link.module.scss';

const Link: React.FC<Props> = ({ children, to, activeClass, className }) => (
  <AppLink to={to} className={className ?? styles.link} activeClassName={activeClass ?? styles.active}>
    {children}
  </AppLink>
);

export default Link;
