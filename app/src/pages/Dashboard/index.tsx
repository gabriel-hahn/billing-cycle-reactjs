import React, { useState } from 'react';
import { RouteComponentProps, Route } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import TransactionModal from '../../components/TransactionModal';

import Overview from './Overview';
import Report from './Report';

import { Container, AddTransactionContainer, PlusText } from './styles';

const Dashboard: React.FC<RouteComponentProps> = ({ match, history }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleLogout = () => {
    history.push('/');
  };

  const handleTransactionModalToggle = () => {
    console.log('STATE: ', modalOpen);
    setModalOpen(!modalOpen);
  };

  return (
    <Container>
      <Navbar onLogout={handleLogout} />

      <AddTransactionContainer onClick={handleTransactionModalToggle}>
        <PlusText />
      </AddTransactionContainer>

      { modalOpen && <TransactionModal onClose={handleTransactionModalToggle} /> }

      <Route path={`${match.url}/overview`} component={Overview} />
      <Route path={`${match.url}/report`} component={Report} />
    </Container>
  );
};

export default Dashboard;
