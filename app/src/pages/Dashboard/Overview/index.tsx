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
      .filter((transaction: TransactionInterface) => transaction.category === TransactionType.CREDIT)
      .reduce((total, credits) => total + (credits.value || 0), 0)));

  const totalDebits = useSelector((state: StoreInterface) => (
    state.transactions.data
      .filter((transaction: TransactionInterface) => transaction.category === TransactionType.DEBIT)
      .reduce((total, debit) => total + (debit.value || 0), 0)));

  const currentBalance = totalCredits - totalDebits;

  return (
    <Container>
      <AmountContainer>
        <Amount value={totalCredits} color="#59C9A6" description="Credits" />
        <Amount value={totalDebits} color="#4D7C8A" description="Debits" />
        <Amount value={currentBalance} color="#1D84B5" description="Current balance" />
        <Amount value={currentBalance} color="#4D7C8A" description="Since beginning" />
      </AmountContainer>
      <TransactionsContainer>
        <TransactionTable />
      </TransactionsContainer>
    </Container>
  );
};

export default Overview;
