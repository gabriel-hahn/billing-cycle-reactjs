import React from 'react';

import Amount from '../../../components/Amount';
import TransactionsForm from '../../../components/TransactionsForm';
import AddTransaction from '../../../components/AddTransaction';

import { Container, AmountContainer, TransactionsContainer } from './styles';

const Overview = () => {
  return (
    <Container>
      <AmountContainer>
        <Amount incoming />
        <Amount />
      </AmountContainer>
      <TransactionsContainer>
        <TransactionsForm />
      </TransactionsContainer>
      <AddTransaction />
    </Container>
  );
};

export default Overview;
