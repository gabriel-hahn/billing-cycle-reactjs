import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { UserActionInterface, UserInterface } from '../../interfaces/user';

import { Creators as UsersActions } from '../ducks/users';

export function* login({ payload }: UserActionInterface) {
  try {
    const { email, password } = payload.user;

    const { data } = yield call(api.post, '/sessions', { email, password });

    const user: UserInterface = {
      name: data.user.name,
      email: data.user.email,
      id: data.user.id,
      token: data.token,
    };

    yield put(UsersActions.getLoginSuccess(user));
  } catch (err) {
    yield put(UsersActions.getLoginError('Invalid credentials'));
  }
}
