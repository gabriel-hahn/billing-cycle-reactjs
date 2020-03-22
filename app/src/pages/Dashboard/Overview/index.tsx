import React from 'react';

import Amount from '../../../components/Amount';
import TransactionTable from '../../../components/TransactionTable';

import { Container, AmountContainer, TransactionsContainer } from './styles';

const Overview = () => {
  return (
    <Container>
      <AmountContainer>
        <Amount incoming />
        <Amount />
      </AmountContainer>
      <TransactionsContainer>
        <TransactionTable />
      </TransactionsContainer>
    </Container>
  );
};

export default Overview;
