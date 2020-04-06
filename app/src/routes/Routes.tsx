import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { Private, Public } from '../components/Access';
import PageLoading from '../components/PageLoading';

const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Suspense fallback={<PageLoading />}>
        <Public exact path="/" component={Login} />
        <Private path="/dashboard" component={Dashboard} />
      </Suspense>
    </Switch>
  </BrowserRouter>
);

export default Routes;
