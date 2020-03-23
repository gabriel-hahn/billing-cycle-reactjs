import React, { useState } from 'react';

import Amount from '../../../components/Amount';
import TransactionTable from '../../../components/TransactionTable';

import { Container, AmountContainer, TransactionsContainer } from './styles';

const Overview = () => {
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);

  return (
    <Container>
      <AmountContainer>
        <Amount currency="R$" value={income} incoming />
        <Amount currency="R$" value={outcome} />
      </AmountContainer>
      <TransactionsContainer>
        <TransactionTable />
      </TransactionsContainer>
    </Container>
  );
};

export default Overview;
