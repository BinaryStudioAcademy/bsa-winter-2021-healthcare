import * as React from 'react';
import { render } from 'react-dom';
import App from './app';
import './assets/styles/index.scss';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
