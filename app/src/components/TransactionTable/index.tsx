import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DateRangePicker, DateRange } from '@matharumanpreet00/react-daterange-picker';

import { Creators as TransactionsActions } from '../../store/ducks/transactions';
import { TransactionInterface, TransactionsRangeDateInterface } from '../../interfaces/transaction';
import { StoreInterface } from '../../interfaces/store';

import {
  currentDateFormat,
  dateOneMonthBeforeFormat,
  toLocaleDateString,
} from '../../utils/date';

import {
  formatCurrency,
} from '../../utils/currency';

import {
  Container,
  ContainerDate,
  DateButton,
  ContainerTable,
  DateRangeContainer,
  ActionsButton,
} from './styles';

const TransactionTable: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [transactions, setTransactions] = useState<TransactionInterface[]>([]);
  const [dateRange, setDateRange] = useState<TransactionsRangeDateInterface>({
    startDate: dateOneMonthBeforeFormat(),
    endDate: currentDateFormat(),
  });

  const transactionsList = useSelector((state: StoreInterface) => (state.transactions.data));
  const dispatch = useDispatch();

  const handleUpdateRange = () => {
    dispatch(TransactionsActions.getTransactionsRequest(dateRange.startDate, dateRange.endDate));
  };

  useEffect(() => {
    handleUpdateRange();
  }, [dateRange]);

  useEffect(() => {
    setTransactions(transactionsList);
  }, [transactionsList]);

  const handleDatePickerChange = (date: DateRange) => {
    const startDate = date.startDate
      ? toLocaleDateString(date.startDate)
      : dateOneMonthBeforeFormat();

    const endDate = date.endDate
      ? toLocaleDateString(date.endDate)
      : currentDateFormat();

    setDateRange({ startDate, endDate });

    setOpen(false);
  };

  const handleDatePickerToggle = () => {
    setOpen(!open);
  };

  const handleEditItem = (transaction: TransactionInterface) => {
    dispatch(TransactionsActions.transactionModalToggle(transaction));
  };

  const handleDeleteItem = (transaction: TransactionInterface) => {
    dispatch(TransactionsActions.deleteTransactionRequest(transaction));
  };

  return (
    <Container>
      <ContainerDate>
        <div>
          <DateButton>Day</DateButton>
          <DateButton>Week</DateButton>
          <DateButton>Month</DateButton>
        </div>
        <DateRangeContainer>
          <DateButton onClick={handleDatePickerToggle}>Choose</DateButton>
          <DateRangePicker open={open} onChange={handleDatePickerChange} />
        </DateRangeContainer>
        <p>{dateRange.startDate} - {dateRange.endDate}</p>
      </ContainerDate>
      <ContainerTable>
        <tbody>
          <tr>
            <th>Description</th>
            <th>Date</th>
            <th>Type</th>
            <th>Value (R$)</th>
            <th />
          </tr>
          { transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>{toLocaleDateString(new Date(transaction.date))}</td>
              <td>{transaction.type}</td>
              <td>{formatCurrency(transaction.value || 0)}</td>
              <td>
                <ActionsButton onClick={() => handleEditItem(transaction)}>Edit</ActionsButton>
                <ActionsButton onClick={() => handleDeleteItem(transaction)}>Delete</ActionsButton>
              </td>
            </tr>
          )) }
        </tbody>
      </ContainerTable>
    </Container>
  );
};

export default TransactionTable;
