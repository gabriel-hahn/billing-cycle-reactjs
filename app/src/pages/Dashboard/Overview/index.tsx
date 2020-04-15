import React, { useState, useEffect, useMemo } from 'react';
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

  const transactions = useSelector((state: StoreInterface) => state.transactions);

  const memoizedTotalCredit = useMemo(() => (transactions.data
    .filter((transaction: TransactionInterface) => transaction.category === TransactionType.CREDIT)
    .reduce((total, credits) => total + (credits.value || 0), 0)), [transactions.data]);

  const memoizedTotalDebit = useMemo(() => (transactions.data
    .filter((transaction: TransactionInterface) => transaction.category === TransactionType.DEBIT)
    .reduce((total, credits) => total + (credits.value || 0), 0)), [transactions.data]);

  const currentBalance = memoizedTotalCredit - memoizedTotalDebit;

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
    if (memoizedTotalDebit >= 0 && memoizedTotalCredit >= 0 && currentBalance >= 0 && !transactions.loading.allLoading) {
      setLoading(false);
    }
  }, [memoizedTotalCredit, memoizedTotalDebit, currentBalance, transactions.loading.allLoading]);

  return (
    <Container>
      <AmountContainer>
        <Amount showDate loading={loading} value={memoizedTotalCredit} color={globalVariables.mainGreen} description="Credits" />
        <Amount showDate loading={loading} value={memoizedTotalDebit} color={globalVariables.mainPink} description="Debits" />
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
