import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
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

    localStorage.setItem('@bc:user', JSON.stringify(user));

    yield put(UsersActions.loginSuccess(user));
  } catch (err) {
    yield put(UsersActions.loginError('Invalid credentials'));
    yield put(toastrActions.add({
      type: 'error',
      title: 'Sign in failed',
      message: err.response.data.message,
      options: {
        timeOut: 4000,
      },
    }));
  }
}

export function* register({ payload }: UserActionInterface) {
  try {
    const { email, password, name } = payload.user;

    const { data } = yield call(api.post, '/user', { email, password, name });

    const user: UserInterface = {
      name: data.user.name,
      email: data.user.email,
      id: data.user.id,
      token: data.token,
    };

    localStorage.setItem('@bc:user', JSON.stringify(user));

    yield put(UsersActions.loginSuccess(user));
  } catch (err) {
    yield put(UsersActions.loginError('Error on register'));
    yield put(toastrActions.add({
      type: 'error',
      title: 'Register failed',
      message: err.response.data.message,
      options: {
        timeOut: 4000,
      },
    }));
  }
}

export function* logout() {
  try {
    localStorage.removeItem('@bc:user');

    yield put(UsersActions.logoutSuccess());
  } catch (err) {
    yield put(toastrActions.add({
      type: 'error',
      title: 'Error on logout',
      message: 'Something is wrong with logout, try again in few minutes!',
      options: {
        timeOut: 4000,
      },
    }));
  }
}

export function* resetPasswordRequest({ payload }: UserActionInterface) {
  try {
    const { email, password, tempToken } = payload.user;

    const { data } = yield call(api.post, '/resetSuccess', { email, password, tempToken });

    const user: UserInterface = {
      name: data.user.name,
      email: data.user.email,
      id: data.user.id,
      token: data.token,
    };

    localStorage.setItem('@bc:user', JSON.stringify(user));

    yield put(UsersActions.loginSuccess(user));
  } catch (err) {
    yield put(UsersActions.loginError('Error on reset password'));
    yield put(toastrActions.add({
      type: 'error',
      title: 'Password reset failed',
      message: err.response.data.message,
      options: {
        timeOut: 4000,
      },
    }));
  }
}
