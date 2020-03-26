import { call, put, select } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import { dateOneMonthBeforeFormat, currentDateFormat } from '../../utils/date';

import { TransactionsActionsInterface, TransactionInterface, TransactionType } from '../../interfaces/transaction';

import { Creators as IncomesActions } from '../ducks/incomes';
import { StoreInterface } from '../../interfaces/store';

export function* loadAllByDate({ payload: { range } }: TransactionsActionsInterface) {
  try {
    const startDate = range ? range.startDate : dateOneMonthBeforeFormat();
    const endDate = range ? range.endDate : currentDateFormat();

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

export function* addTransaction({ payload: { transaction } }: TransactionsActionsInterface) {
  try {
    if (transaction) {
      const addData = transaction;
      const user = yield select((state: StoreInterface) => state.users.data);

      addData.user_id = user.id;

      const { data } = yield call(api.post, '/credit', addData);

      data.type = TransactionType.CREDIT;

      yield put(IncomesActions.addincomeSuccess(data));
    }
  } catch (err) {
    yield put(IncomesActions.incomesError('Request error'));
    yield put(toastrActions.add({
      type: 'error',
      title: 'Error on add new income',
      message: err.response.data.message,
      options: {
        timeOut: 4000,
      },
    }));
  }
}
