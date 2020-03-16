import React from 'react';
import { Link, Route, RouteComponentProps } from 'react-router-dom';

import { RouteInfoInterface } from '../../interfaces/route';

import Overview from './Overview';
import Transaction from './Transaction';
import Report from './Report';

const Dashboard = ({ match }: RouteComponentProps<RouteInfoInterface>) => {
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
