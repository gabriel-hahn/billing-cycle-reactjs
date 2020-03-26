import React from 'react';
import { useSelector } from 'react-redux';

import { StoreInterface } from '../../../interfaces/store';

import Amount from '../../../components/Amount';
import TransactionTable from '../../../components/TransactionTable';

import { Container, AmountContainer, TransactionsContainer } from './styles';
import { TransactionInterface, TransactionType } from '../../../interfaces/transaction';

const Overview = () => {
  const totalIncomes = useSelector((state: StoreInterface) => (
    state.transactions.data
      .filter((transaction: TransactionInterface) => transaction.type === TransactionType.CREDIT)
      .reduce((total, debt) => total + debt.value, 0)));

  const totalDebts = useSelector((state: StoreInterface) => (
    state.transactions.data
      .filter((transaction: TransactionInterface) => transaction.type === TransactionType.DEBT)
      .reduce((total, debt) => total + debt.value, 0)));

  return (
    <Container>
      <AmountContainer>
        <Amount value={totalIncomes} incoming />
        <Amount value={totalDebts} />
      </AmountContainer>
      <TransactionsContainer>
        <TransactionTable />
      </TransactionsContainer>
    </Container>
  );
};

export default Overview;
