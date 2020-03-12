import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
