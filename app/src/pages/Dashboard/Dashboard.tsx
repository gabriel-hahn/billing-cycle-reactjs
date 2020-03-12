import React from 'react';
import { Link, Route, RouteComponentProps } from 'react-router-dom';

import { RouteInfo } from '../../interfaces/route';

import Overview from './Overview/Overview';
import Transaction from './Transaction/Transaction';
import Report from './Report/Report';

const Dashboard = ({ match }: RouteComponentProps<RouteInfo>) => {
  return (
    <>
      <h1>Dashboard Page</h1>
      <ul>
        <li><Link to="overview">Overview</Link></li>
        <li><Link to="transaction">Transaction</Link></li>
        <li><Link to="report">Report</Link></li>
      </ul>

      <Route path={`${match.url}/overview`} component={Overview} />
      <Route path={`${match.url}/transaction`} component={Transaction} />
      <Route path={`${match.url}/report`} component={Report} />
    </>
  );
};

export default Dashboard;
