import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import api from '../../../services/api';

import { StoreInterface } from '../../../interfaces/store';
import { globalVariables } from '../../../styles/variables';

import Amount from '../../../components/Amount';
import TransactionTable from '../../../components/TransactionTable';

import { Container, AmountContainer, TransactionsContainer } from './styles';
import { TransactionInterface, TransactionType } from '../../../interfaces/transaction';

interface TotalTransactionInterface {
  debit: number,
  credit: number,
}

const Overview = () => {
  const [totalTransactions, setTotalTransactions] = useState(0);
  const totalCredits = useSelector((state: StoreInterface) => (
    state.transactions.data
      .filter((transaction: TransactionInterface) => transaction.category === TransactionType.CREDIT)
      .reduce((total, credits) => total + (credits.value || 0), 0)));

  const totalDebits = useSelector((state: StoreInterface) => (
    state.transactions.data
      .filter((transaction: TransactionInterface) => transaction.category === TransactionType.DEBIT)
      .reduce((total, debit) => total + (debit.value || 0), 0)));

  const currentBalance = totalCredits - totalDebits;

  const handleTransactionsTotalRequest = async () => {
    const { data } = await api.get<TotalTransactionInterface>('/transactions/completeCashFlow');
    const balance = data.credit - data.debit;

    setTotalTransactions(balance);
  };

  useEffect(() => {
    handleTransactionsTotalRequest();
  }, []);

  return (
    <Container>
      <AmountContainer>
        <Amount showDate value={totalCredits} color={globalVariables.mainGreen} description="Credits" />
        <Amount showDate value={totalDebits} color={globalVariables.mainPink} description="Debits" />
        <Amount showDate value={currentBalance} color={globalVariables.mainBlue} description="Current balance" />
        <Amount value={totalTransactions} color={globalVariables.mainBlue} description="Total" />
      </AmountContainer>
      <TransactionsContainer>
        <TransactionTable />
      </TransactionsContainer>
    </Container>
  );
};

export default Overview;
