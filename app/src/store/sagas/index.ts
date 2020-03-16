import { all, takeLatest } from 'redux-saga/effects';

import { Types as UsersTypes } from '../ducks/users';

import { login, register } from './users';

export default function* rootSaga() {
  yield all([
    takeLatest(UsersTypes.LOGIN_REQUEST, login),
    takeLatest(UsersTypes.REGISTER_REQUEST, register),
  ]);
}
