import { call, put, select } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import { dateOneMonthBeforeFormat, currentDateFormat } from '../../utils/date';

import { TransactionsActionsInterface, TransactionInterface, TransactionType } from '../../interfaces/transaction';

import { Creators as DebtsActions } from '../ducks/debts';
import { StoreInterface } from '../../interfaces/store';

export function* loadAllByDate({ payload: { range } }: TransactionsActionsInterface) {
  try {
    const startDate = range ? range.startDate : dateOneMonthBeforeFormat();
    const endDate = range ? range.endDate : currentDateFormat();

    const { data } = yield call(api.get, '/debts', { params: { startDate, endDate } });

    const debts: TransactionInterface[] = data.map((income: TransactionInterface) => (
      { ...income, type: TransactionType.DEBT }));

    yield put(DebtsActions.debtsSuccess(debts));
  } catch (err) {
    yield put(DebtsActions.debtsError('Request error'));
    yield put(toastrActions.add({
      type: 'error',
      title: 'Error on retrieve debts',
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

      addData.user_id = user.id;

      const { data } = yield call(api.post, '/debt', addData);

      data.type = TransactionType.DEBT;

      yield put(DebtsActions.addDebtSuccess(data));
    }
  } catch (err) {
    yield put(DebtsActions.debtsError('Request error'));
    yield put(toastrActions.add({
      type: 'error',
      title: 'Error on add new debt',
      message: err.response.data.message,
      options: {
        timeOut: 4000,
      },
    }));
  }
}
