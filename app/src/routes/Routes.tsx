import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Transaction from '../pages/Dashboard/Transaction/Transaction';
import Report from '../pages/Dashboard/Report/Report';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard/overview" component={Dashboard} />
      <Route exact path="/dashboard/report" component={Report} />
      <Route exact path="/dashboard/transaction" component={Transaction} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
