import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { Private, Public } from '../components/Access';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Public exact path="/" component={Login} />
      <Private path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
