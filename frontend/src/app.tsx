import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoute } from 'common/enums';
import Counter from 'components/counter/counter';
import { Link } from 'components/common';
import logo from 'assets/images/logo.svg';

const App: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="App">
        <div>
          <ul className="App-navigation-list">
            <li>
              <Link to={AppRoute.ROOT}>Root</Link>
            </li>
            <li>
              <Link to={AppRoute.SIGN_IN}>Sign in</Link>
            </li>
            <li>
              <Link to={AppRoute.SIGN_UP}>Sign up</Link>
            </li>
            <li>
              <Link to={AppRoute.ADMIN_PAGE}>Admin page</Link>
            </li>
          </ul>
          <p>Current path: {pathname}</p>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className="App-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </header>
      </div>
    </>
  );
};

export default App;
