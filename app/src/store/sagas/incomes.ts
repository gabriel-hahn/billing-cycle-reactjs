import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import { TransactionsActionsInterface, TransactionInterface, TransactionType } from '../../interfaces/transaction';

import { Creators as IncomesActions } from '../ducks/incomes';

export function* loadAllByDate({ payload: { range } }: TransactionsActionsInterface) {
  try {
    const { startDate, endDate } = range;

    const { data } = yield call(api.get, '/credits', { params: { startDate, endDate } });

    const incomes: TransactionInterface[] = data.map((income: TransactionInterface) => (
      { ...income, type: TransactionType.CREDIT }));

    yield put(IncomesActions.incomesSuccess(incomes));
  } catch (err) {
    yield put(IncomesActions.incomesError('Request error'));
    yield put(toastrActions.add({
      type: 'error',
      title: 'Error on retrieve incomes',
      message: err.response.data.message,
      options: {
        timeOut: 4000,
      },
    }));
  }
}
