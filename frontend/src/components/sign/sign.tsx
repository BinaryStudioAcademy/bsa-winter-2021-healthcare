import * as React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoute } from 'common/enums';
import { RootState } from 'common/types';
import { SignUpForm, SignInForm } from './components';

import styles from './styles.module.scss';
import logo from 'assets/images/logo.svg';

const Sign: React.FC = () => {
  const { pathname } = useLocation();

  const getScreen = (path: AppRoute) => {
    switch (path) {
      case AppRoute.SIGN_UP: {
        return <SignUpForm />;
      }
      case AppRoute.SIGN_IN: {
        return <SignInForm />;
      }
    }

    return null;
  };

  const { user } = useSelector(({ auth }: RootState) => ({
    user: auth.user,
  }));
  const hasUser = Boolean(user);
  if (hasUser) {
    return <Redirect to={AppRoute.DOCTORS} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.container__logo}>
        <div className={styles.container__blur}>
          <img
            src={logo}
            width="301"
            height="346"
            loading="lazy"
            alt="Health Care logo"
          />
        </div>
      </div>
      <div className={styles.container__content}>
        {getScreen(pathname as AppRoute)}
      </div>
    </div>
  );
};

export default Sign;
