import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DateRangePicker, DateRange } from '@matharumanpreet00/react-daterange-picker';

import { Creators as TransactionsActions } from '../../store/ducks/transactions';
import { TransactionInterface, TransactionsRangeDateInterface, TransactionType } from '../../interfaces/transaction';
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
  }, []);

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
              <td>{transaction.date}</td>
              <td>{transaction.type}</td>
              <td>{formatCurrency(transaction.value)}</td>
              <td>
                <button type="button">Edit</button>
                <button type="button">Delete</button>
              </td>
            </tr>
          )) }
        </tbody>
      </ContainerTable>
    </Container>
  );
};

export default TransactionTable;
