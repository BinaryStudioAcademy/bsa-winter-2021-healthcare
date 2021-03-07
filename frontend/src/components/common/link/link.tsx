import * as React from 'react';
import { Link as AppLink } from 'react-router-dom';
import { Props } from './common/types';

const Link: React.FC<Props> = ({ children, to }) => (
  <AppLink to={to}>{children}</AppLink>
);

export default Link;
