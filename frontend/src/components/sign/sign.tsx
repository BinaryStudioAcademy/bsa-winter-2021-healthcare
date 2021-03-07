import * as React from 'react';
import { useLocation } from 'react-router-dom'
import { AppRoute } from 'common/enums'
import FormSignUp from './components/form-sign-up'

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
    <>
    {getScreen(pathname as AppRoute)}
    </>
  )
}

export default Sign
