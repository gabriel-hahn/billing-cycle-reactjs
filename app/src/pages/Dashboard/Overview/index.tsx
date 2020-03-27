import React from 'react';
import { useSelector } from 'react-redux';

import { StoreInterface } from '../../../interfaces/store';

import Amount from '../../../components/Amount';
import TransactionTable from '../../../components/TransactionTable';

import { Container, AmountContainer, TransactionsContainer } from './styles';
import { TransactionInterface, TransactionType } from '../../../interfaces/transaction';

const Overview = () => {
  const totalCredits = useSelector((state: StoreInterface) => (
    state.transactions.data
      .filter((transaction: TransactionInterface) => transaction.type === TransactionType.CREDIT)
      .reduce((total, credits) => total + (credits.value || 0), 0)));

  const totalDebits = useSelector((state: StoreInterface) => (
    state.transactions.data
      .filter((transaction: TransactionInterface) => transaction.type === TransactionType.DEBIT)
      .reduce((total, debit) => total + (debit.value || 0), 0)));

  return (
    <Container>
      <AmountContainer>
        <Amount value={totalCredits} incoming />
        <Amount value={totalDebits} />
      </AmountContainer>
      <TransactionsContainer>
        <TransactionTable />
      </TransactionsContainer>
    </Container>
  );
};

export default Overview;
