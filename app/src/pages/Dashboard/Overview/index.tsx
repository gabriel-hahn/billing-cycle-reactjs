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
  const [loading, setLoading] = useState<boolean>(true);
  const [totalLoading, setTotalLoading] = useState<boolean>(true);
  const [totalTransactions, setTotalTransactions] = useState<number>(0);
  const totalCredits = useSelector((state: StoreInterface) => (
    state.transactions.data
      .filter((transaction: TransactionInterface) => transaction.category === TransactionType.CREDIT)
      .reduce((total, credits) => total + (credits.value || 0), 0)));

  const totalDebits = useSelector((state: StoreInterface) => (
    state.transactions.data
      .filter((transaction: TransactionInterface) => transaction.category === TransactionType.DEBIT)
      .reduce((total, debit) => total + (debit.value || 0), 0)));

  const transactionsLoading = useSelector((state: StoreInterface) => (
    state.transactions.loading.allLoading));

  const currentBalance = totalCredits - totalDebits;

  const handleTransactionsTotalRequest = async () => {
    const { data } = await api.get<TotalTransactionInterface>('/transactions/completeCashFlow');
    const balance = data.credit - data.debit;

    setTotalTransactions(balance);
    setTotalLoading(false);
  };

  useEffect(() => {
    handleTransactionsTotalRequest();
  }, []);

  useEffect(() => {
    if (totalDebits && totalDebits && currentBalance && !transactionsLoading) {
      setLoading(false);
    }
  }, [totalCredits, totalDebits, currentBalance, transactionsLoading]);

  return (
    <Container>
      <AmountContainer>
        <Amount showDate loading={loading} value={totalCredits} color={globalVariables.mainGreen} description="Credits" />
        <Amount showDate loading={loading} value={totalDebits} color={globalVariables.mainPink} description="Debits" />
        <Amount showDate loading={loading} value={currentBalance} color={globalVariables.mainBlue} description="Current balance" />
        <Amount loading={totalLoading} value={totalTransactions} color={globalVariables.mainBlue} description="Total" />
      </AmountContainer>
      <TransactionsContainer>
        <TransactionTable />
      </TransactionsContainer>
    </Container>
  );
};

export default Overview;
