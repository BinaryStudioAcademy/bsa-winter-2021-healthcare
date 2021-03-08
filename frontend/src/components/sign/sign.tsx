import * as React from 'react';
import { useLocation } from 'react-router-dom'
import { AppRoute } from 'common/enums'
import { FormSignUp } from './components'

import styles from './styles.module.scss';
import logo from 'assets/images/logo.svg';

const Sign: React.FC = () => {
  const { pathname } = useLocation();

  const getScreen = (path: AppRoute) => {
    switch(path) {
      case AppRoute.SIGN_UP: {
        return <FormSignUp/>;
      }
    }

    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.container__logo}>
        <div className={styles.container__blur}>
          <img src={logo} width="301" height="346" loading="lazy" alt="Health Care logo" />
        </div>
      </div>
      <div className={styles.container__content}>
        {getScreen(pathname as AppRoute)}
      </div>
    </div>
  )
}

export default Sign
