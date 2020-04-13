import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps, Route } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import TransactionModal from '../../components/TransactionModal';

import Overview from './Overview';
import Report from './Report';
import Settings from './Settings';

import { StoreInterface } from '../../interfaces/store';
import { getSettings } from '../../utils/settings';
import { Creators as TransactionsActions } from '../../store/ducks/transactions';
import { Container, AddTransactionContainer, PlusText } from './styles';

const Dashboard: React.FC<RouteComponentProps> = ({ match, history }) => {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state: StoreInterface) => state.transactions.modalOpen);

  useEffect(() => {
    getSettings();
  });

  const handleLogout = () => {
    history.push('/');
  };

  const handleTransactionModalToggle = () => {
    dispatch(TransactionsActions.transactionModalToggle());
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
      <Route path={`${match.url}/settings`} component={Settings} />
    </Container>
  );
};

export default Dashboard;
