import React from 'react';
import { RouteComponentProps, Route } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import AddTransaction from '../../components/AddTransaction';

import Overview from './Overview';
import Report from './Report';

import { Container, AddTransactionContainer } from './styles';

const Dashboard: React.FC<RouteComponentProps> = ({ match, history }) => {
  const handleLogout = () => {
    history.push('/');
  };

  return (
    <Container>
      <Navbar onLogout={handleLogout} />

      <Route path={`${match.url}/overview`} component={Overview} />
      <Route path={`${match.url}/report`} component={Report} />

      <AddTransactionContainer>
        <AddTransaction />
      </AddTransactionContainer>
    </Container>
  );
};

export default Dashboard;
