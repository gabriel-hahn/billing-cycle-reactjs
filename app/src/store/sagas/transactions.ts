import { call, put, select } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import { dateOneMonthBeforeFormat, currentDateFormat } from '../../utils/date';
import { TransactionsActionsInterface, TransactionInterface, TransactionType } from '../../interfaces/transaction';

import { Creators as TransactionsActions } from '../ducks/transactions';
import { StoreInterface } from '../../interfaces/store';

const CREDITS_PATH = '/credits';
const CREDIT_PATH = '/credit';
const DEBTS_PATH = '/debts';
const DEBT_PATH = '/debt';

export function* loadAllByDate({ payload: { range, type } }: TransactionsActionsInterface) {
  try {
    const startDate = range ? range.startDate : dateOneMonthBeforeFormat();
    const endDate = range ? range.endDate : currentDateFormat();
    let incomes: TransactionInterface[] = [];

    if (type) {
      const path = type === TransactionType.CREDIT ? CREDITS_PATH : DEBTS_PATH;
      const { data } = yield call(api.get, path, { params: { startDate, endDate } });

      incomes = data.map((income: TransactionInterface) => ({ ...income, type }));
    } else {
      const { data: debtsData } = yield call(api.get, DEBTS_PATH, { params: { startDate, endDate } });
      const { data: creditsData } = yield call(api.get, CREDITS_PATH, { params: { startDate, endDate } });

      const debts: TransactionInterface[] = debtsData.map((income: TransactionInterface) => (
        { ...income, type: TransactionType.DEBT }
      ));
      const credits: TransactionInterface[] = creditsData.map((income: TransactionInterface) => (
        { ...income, type: TransactionType.CREDIT }
      ));

      incomes = [...debts, ...credits];
    }

    yield put(TransactionsActions.getTransactionsSuccess(incomes));
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
      const path = addData.type === TransactionType.CREDIT ? CREDIT_PATH : DEBT_PATH;

      addData.user_id = user.id;

      const { data } = yield call(api.post, path, addData);

      data.type = transaction.type;

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
