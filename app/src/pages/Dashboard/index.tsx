import React from 'react';
import { Link, Route, RouteComponentProps } from 'react-router-dom';

import Overview from './Overview';
import Transaction from './Transaction';
import Report from './Report';
import Navbar from '../../components/Navbar';

const Dashboard = (props: RouteComponentProps) => {
  const { match, history } = props;

  const handleLogout = () => {
    history.push('/');
  };

  return (
    <>
      <Navbar onLogout={handleLogout} />
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
