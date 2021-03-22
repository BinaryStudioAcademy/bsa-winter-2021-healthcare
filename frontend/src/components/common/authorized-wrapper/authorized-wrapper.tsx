import React from 'react';
import { RootState } from 'common/types';
import { useSelector } from 'react-redux';
import { Header } from 'components/common';
import { IUserWithPermissions } from 'common/interfaces';

import styles from './authorized-wrapper.module.scss';

const AuthorizedWrapper: React.FC = ({ children }) => {
  const { user } = useSelector(({ auth }: RootState) => ({
    user: auth.user,
  }));

  return (
    <div className={styles.wrapper}>
      <Header user={user as IUserWithPermissions} />
      {children}
    </div>
  );
};

export default AuthorizedWrapper;
