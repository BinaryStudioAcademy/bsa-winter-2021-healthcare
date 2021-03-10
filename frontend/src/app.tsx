import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from 'components/not-found/not-found';

const App: React.FC = () => (
  <Switch>
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default App;
