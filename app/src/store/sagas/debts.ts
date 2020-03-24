import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import { TransactionsActionsInterface, TransactionInterface, TransactionType } from '../../interfaces/transaction';

import { Creators as DebtsActions } from '../ducks/debts';

export function* loadAllByDate({ payload: { range } }: TransactionsActionsInterface) {
  try {
    const { startDate, endDate } = range;

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
