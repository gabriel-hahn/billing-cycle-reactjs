import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <>
    <h1>Dashboard Page</h1>
    <ul>
      <li><Link to="overview">Overview</Link></li>
      <li><Link to="report">Report</Link></li>
      <li><Link to="transaction">Transaction</Link></li>
    </ul>
  </>
);

export default Dashboard;
