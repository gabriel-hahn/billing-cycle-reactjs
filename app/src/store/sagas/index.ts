import { all, takeLatest } from 'redux-saga/effects';

import { Types as UsersTypes } from '../ducks/users';
import { Types as TransactionsTypes } from '../ducks/transactions';

import { login, register, logout } from './users';
import { loadAllByDate, addTransaction } from './transactions';

export default function* rootSaga() {
  yield all([
    takeLatest(UsersTypes.LOGIN_REQUEST, login),
    takeLatest(UsersTypes.REGISTER_REQUEST, register),
    takeLatest(UsersTypes.LOGOUT_REQUEST, logout),

    takeLatest(TransactionsTypes.GET_TRANSACTIONS_REQUEST, loadAllByDate),
    takeLatest(TransactionsTypes.ADD_TRANSACTION_REQUEST, addTransaction),
  ]);
}
