import { call, put, select } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import { getSettings } from '../../utils/settings';
import { dateOneMonthBeforeFormat, currentDateFormat, formatFromPtToEn } from '../../utils/date';
import { TransactionsActionsInterface, TransactionInterface, TransactionType } from '../../interfaces/transaction';

import { Creators as TransactionsActions } from '../ducks/transactions';
import { StoreInterface } from '../../interfaces/store';
import { DateFormatType } from '../../enums/settings';

const CREDITS_PATH = '/credits';
const CREDIT_PATH = '/credit';
const DEBITS_PATH = '/debits';
const DEBIT_PATH = '/debit';

export function* loadAllByDate({ payload: { range, category } }: TransactionsActionsInterface) {
  try {
    const { dateFormat } = getSettings();

    let endDate = range ? range.endDate : currentDateFormat();
    let startDate = range ? range.startDate : dateOneMonthBeforeFormat();
    let transactions: TransactionInterface[] = [];

    if (dateFormat === DateFormatType.PT) {
      endDate = formatFromPtToEn(endDate);
      startDate = formatFromPtToEn(startDate);
    }

    if (category) {
      const path = category === TransactionType.CREDIT ? CREDITS_PATH : DEBITS_PATH;
      const { data } = yield call(api.get, path, { params: { startDate, endDate } });

      transactions = data.map((transaction: TransactionInterface) => ({ ...transaction, category }));
    } else {
      const { data: debitsData } = yield call(api.get, DEBITS_PATH, { params: { startDate, endDate } });
      const { data: creditsData } = yield call(api.get, CREDITS_PATH, { params: { startDate, endDate } });

      const debits: TransactionInterface[] = debitsData.map((transaction: TransactionInterface) => (
        { ...transaction, category: TransactionType.DEBIT }
      ));
      const credits: TransactionInterface[] = creditsData.map((transaction: TransactionInterface) => (
        { ...transaction, category: TransactionType.CREDIT }
      ));

      transactions = [...debits, ...credits];
    }

    yield put(TransactionsActions.getTransactionsSuccess(transactions));
  } catch (err) {
    yield put(TransactionsActions.transactionsError('Request error'));
    yield put(toastrActions.add({
      type: 'error',
      title: 'Error on retrieve transactions',
      message: err.response.data.message,
      options: {
        timeOut: 4000,
      },
    }));
  }
}

export function* addTransaction({ payload: { transaction } }: TransactionsActionsInterface) {
  try {
    if (transaction) {
      const addData = transaction;
      const user = yield select((state: StoreInterface) => state.users.data);
      const path = addData.category === TransactionType.CREDIT ? CREDIT_PATH : DEBIT_PATH;

      addData.user_id = user.id;

      const { data } = yield call(api.post, path, addData);

      data.category = transaction.category;

      yield put(TransactionsActions.addTransactionSuccess(data));
    }
  } catch (err) {
    yield put(TransactionsActions.transactionsError('Request error'));
    yield put(toastrActions.add({
      type: 'error',
      title: 'Error on add new transaction',
      message: err.response.data.message,
      options: {
        timeOut: 4000,
      },
    }));
  }
}

export function* deleteTransaction({ payload: { transaction } }: TransactionsActionsInterface) {
  try {
    if (transaction) {
      const path = transaction.category === TransactionType.CREDIT ? CREDIT_PATH : DEBIT_PATH;
      const { data } = yield call(api.delete, `${path}/${transaction.id}`);

      yield put(TransactionsActions.deleteTransactionSuccess(data));
    }
  } catch (err) {
    yield put(TransactionsActions.transactionsError('Delete transaction error'));
    yield put(toastrActions.add({
      type: 'error',
      title: 'Error on delete transaction',
      message: err.response.data.message,
      options: {
        timeOut: 4000,
      },
    }));
  }
}

export function* updateTransaction({ payload: { transaction } }: TransactionsActionsInterface) {
  try {
    if (transaction) {
      const path = transaction.category === TransactionType.CREDIT ? CREDIT_PATH : DEBIT_PATH;
      const { data } = yield call(api.put, path, transaction);

      data.category = transaction.category;

      yield put(TransactionsActions.updateTransactionSuccess(data));
    }
  } catch (err) {
    yield put(TransactionsActions.transactionsError('Update transaction error'));
    yield put(toastrActions.add({
      type: 'error',
      title: 'Error on update transaction',
      message: err.response.data.message,
      options: {
        timeOut: 4000,
      },
    }));
  }
}
