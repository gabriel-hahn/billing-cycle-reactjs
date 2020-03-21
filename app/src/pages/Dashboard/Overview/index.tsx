import React from 'react';

import Amount from '../../../components/Amount';
import TransactionsForm from '../../../components/TransactionsForm';

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
    </Container>
  );
};

export default Overview;
