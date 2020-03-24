import { all, takeLatest } from 'redux-saga/effects';

import { Types as UsersTypes } from '../ducks/users';
import { Types as IncomesTypes } from '../ducks/incomes';
import { Types as DebtsTypes } from '../ducks/debts';

import { login, register, logout } from './users';
import { loadAllByDate as loadCreditsAllByDate } from './incomes';
import { loadAllByDate as loadDebtsAllByDate } from './debts';

export default function* rootSaga() {
  yield all([
    takeLatest(UsersTypes.LOGIN_REQUEST, login),
    takeLatest(UsersTypes.REGISTER_REQUEST, register),
    takeLatest(UsersTypes.LOGOUT_REQUEST, logout),

    takeLatest(IncomesTypes.LOAD_INCOMES_REQUEST, loadCreditsAllByDate),

    takeLatest(DebtsTypes.LOAD_DEBTS_REQUEST, loadDebtsAllByDate),
  ]);
}
