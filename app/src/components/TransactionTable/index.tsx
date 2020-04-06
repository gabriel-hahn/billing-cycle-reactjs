import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DateRangePicker, DateRange } from '@matharumanpreet00/react-daterange-picker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen,
  faTrash,
  faHandHoldingUsd,
  faReceipt,
} from '@fortawesome/free-solid-svg-icons';

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
  OptionButton,
  ContainerTable,
  PaginationButton,
  ActionsButton,
  DatePicker,
  CategoryColumn,
  CategoryHead,
  SmallTableContainer,
  SmallTableItem,
  SmallTableText,
  SmallTableCurrency,
  SmallTableDate,
  SmallTableItemContainer,
  SmallTableDescription,
} from './styles';

export interface StylePropsInterface {
  disabled?: boolean;
  credit?: boolean;
}

const TRANSACTIONS_PAGE = 10;

const TransactionTable: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [transactions, setTransactions] = useState<TransactionInterface[]>([]);
  const [dateRange, setDateRange] = useState<TransactionsRangeDateInterface>({
    startDate: dateOneMonthBeforeFormat(),
    endDate: currentDateFormat(),
  });

  const allTransactions = useSelector((state: StoreInterface) => (state.transactions.data));
  const dispatch = useDispatch();

  const pagination = (allTransactions.length / TRANSACTIONS_PAGE);
  const needsPagination = pagination % 1 !== 0 && pagination > 1;

  const handleUpdateRange = () => {
    dispatch(TransactionsActions.getTransactionsRequest(dateRange.startDate, dateRange.endDate));
  };

  const setCurrentTransactionsListByPage = () => {
    const pageConst = currentPage * TRANSACTIONS_PAGE;
    const transactionsList = allTransactions.slice(pageConst, pageConst + TRANSACTIONS_PAGE);

    setTransactions(transactionsList);
  };

  useEffect(() => {
    handleUpdateRange();
  }, [dateRange]);

  useEffect(() => {
    setCurrentTransactionsListByPage();
  }, [allTransactions, currentPage]);

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

  const handlePreviousPageClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPageClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleDayFilter = () => {
    const today = toLocaleDateString(new Date());

    setDateRange({
      startDate: today,
      endDate: today,
    });
  };

  const handleWeekFilter = () => {
    const today = new Date();
    const weekAgo = new Date();

    weekAgo.setDate(today.getDate() - 7);

    setDateRange({
      startDate: toLocaleDateString(weekAgo),
      endDate: toLocaleDateString(today),
    });
  };

  const handleMonthFilter = () => {
    const today = new Date();
    const monthAgo = new Date();

    monthAgo.setMonth(today.getMonth() - 1);

    setDateRange({
      startDate: toLocaleDateString(monthAgo),
      endDate: toLocaleDateString(today),
    });
  };

  return (
    <Container>
      <ContainerDate>
        <div>
          <OptionButton onClick={handleDayFilter}>Day</OptionButton>
          <OptionButton onClick={handleWeekFilter}>Week</OptionButton>
          <OptionButton onClick={handleMonthFilter}>Month</OptionButton>
          <OptionButton onClick={handleDatePickerToggle}>Choose</OptionButton>
          <DatePicker>
            <DateRangePicker open={open} onChange={handleDatePickerChange} />
          </DatePicker>
        </div>
        { needsPagination && (
          <div>
            <PaginationButton
              disabled={currentPage === 0}
              onClick={handlePreviousPageClick}
            >
              <p>Previous</p>
            </PaginationButton>
            <PaginationButton
              disabled={Math.ceil(currentPage + 1) === Math.ceil(pagination)}
              onClick={handleNextPageClick}
            >
              <p>Next</p>
            </PaginationButton>
          </div>
        ) }
      </ContainerDate>
      <ContainerTable>
        <tbody>
          <tr>
            <th>Description</th>
            <th>Date</th>
            <CategoryHead>Value (R$)</CategoryHead>
            <th>Category</th>
            <th />
          </tr>
          { transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.description}</td>
              <td>{toLocaleDateString(new Date(transaction.date))}</td>
              <td align="right">{formatCurrency(transaction.value || 0)}</td>
              <CategoryColumn credit={transaction.category === TransactionType.CREDIT}>
                { transaction.category === TransactionType.CREDIT ? (
                  <FontAwesomeIcon title="Credit" icon={faHandHoldingUsd} />) : (
                    <FontAwesomeIcon title="Debit" icon={faReceipt} />)
                }
              </CategoryColumn>
              <td>
                <ActionsButton>
                  <FontAwesomeIcon onClick={() => handleEditItem(transaction)} icon={faPen} />
                  <FontAwesomeIcon onClick={() => handleDeleteItem(transaction)} icon={faTrash} />
                </ActionsButton>
              </td>
            </tr>
          )) }
        </tbody>
      </ContainerTable>
      <SmallTableContainer>
        <SmallTableText>Last transactions</SmallTableText>
        <SmallTableItemContainer>
          { transactions.map((transaction, index) => (
            <SmallTableItem key={index}>
              <div>
                <SmallTableDescription>{transaction.description}</SmallTableDescription>
                <SmallTableDate>{toLocaleDateString(new Date(transaction.date))}</SmallTableDate>
              </div>
              <SmallTableCurrency>{formatCurrency(transaction.value || 0)}</SmallTableCurrency>
            </SmallTableItem>
          )) }
        </SmallTableItemContainer>
      </SmallTableContainer>
    </Container>
  );
};

export default TransactionTable;
