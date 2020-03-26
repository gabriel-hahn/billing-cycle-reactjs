import { all, takeLatest } from 'redux-saga/effects';

import { Types as UsersTypes } from '../ducks/users';
import { Types as IncomesTypes } from '../ducks/incomes';
import { Types as DebtsTypes } from '../ducks/debts';

import { login, register, logout } from './users';
import { loadAllByDate as loadCreditsAllByDate, addTransaction as addIncomes } from './incomes';
import { loadAllByDate as loadDebtsAllByDate, addTransaction as addDebt } from './debts';

export default function* rootSaga() {
  yield all([
    takeLatest(UsersTypes.LOGIN_REQUEST, login),
    takeLatest(UsersTypes.REGISTER_REQUEST, register),
    takeLatest(UsersTypes.LOGOUT_REQUEST, logout),

    takeLatest(IncomesTypes.INCOMES_REQUEST, loadCreditsAllByDate),
    takeLatest(IncomesTypes.ADD_INCOME_REQUEST, addIncomes),

    takeLatest(DebtsTypes.DEBTS_REQUEST, loadDebtsAllByDate),
    takeLatest(DebtsTypes.ADD_DEBT_REQUEST, addDebt),
  ]);
}
