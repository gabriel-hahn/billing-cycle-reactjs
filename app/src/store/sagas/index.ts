import { all, takeLatest } from 'redux-saga/effects';

import { Types as UsersTypes } from '../ducks/users';
import { Types as TransactionsTypes } from '../ducks/transactions';
import { Types as SettingsTypes } from '../ducks/settings';

import {
  login,
  register,
  logout,
  resetPasswordRequest,
} from './users';

import {
  loadAllByDate,
  addTransaction,
  deleteTransaction,
  updateTransaction,
} from './transactions';

import { loadSettings, updateSettings } from './settings';

export default function* rootSaga() {
  yield all([
    takeLatest(UsersTypes.LOGIN_REQUEST, login),
    takeLatest(UsersTypes.REGISTER_REQUEST, register),
    takeLatest(UsersTypes.LOGOUT_REQUEST, logout),
    takeLatest(UsersTypes.RESET_PASSWORD_REQUEST, resetPasswordRequest),

    takeLatest(TransactionsTypes.GET_TRANSACTIONS_REQUEST, loadAllByDate),
    takeLatest(TransactionsTypes.ADD_TRANSACTION_REQUEST, addTransaction),
    takeLatest(TransactionsTypes.DELETE_TRANSACTION_REQUEST, deleteTransaction),
    takeLatest(TransactionsTypes.UPDATE_TRANSACTION_REQUEST, updateTransaction),

    takeLatest(SettingsTypes.SETTINGS_REQUEST, loadSettings),
    takeLatest(SettingsTypes.SETTINGS_UPDATE_REQUEST, updateSettings),
  ]);
}
