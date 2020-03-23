import React, { useState } from 'react';
import { RouteComponentProps, Route } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import TransactionModal from '../../components/TransactionModal';
import AddTransaction from '../../components/AddTransaction';

import Overview from './Overview';
import Report from './Report';

import { Container, AddTransactionContainer } from './styles';

const Dashboard: React.FC<RouteComponentProps> = ({ match, history }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleLogout = () => {
    history.push('/');
  };

  const handleTransactionModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Container>
      <Navbar onLogout={handleLogout} />

      <Route path={`${match.url}/overview`} component={Overview} />
      <Route path={`${match.url}/report`} component={Report} />

      <AddTransactionContainer>
        <AddTransaction onAdd={handleTransactionModalToggle} />
      </AddTransactionContainer>

      { modalOpen && <TransactionModal onClose={handleTransactionModalToggle} /> }
    </Container>
  );
};

export default Dashboard;
