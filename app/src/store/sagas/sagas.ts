import { all, takeLatest } from 'redux-saga/effects';

import { Types as UsersTypes } from '../ducks/users';

import { login } from './users';

export default function* rootSaga() {
  yield all([
    takeLatest(UsersTypes.GET_LOGIN_REQUEST, login),
  ]);
}
