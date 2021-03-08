import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoute } from 'common/enums';
import DoctorsSearch from 'components/doctors-search/doctors-search';
import { Link } from 'components/common';
import logo from 'assets/images/logo.svg';

const App: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      <DoctorsSearch />
    </>
  );
};

export default App;
