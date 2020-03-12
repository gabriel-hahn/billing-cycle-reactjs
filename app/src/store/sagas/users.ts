import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { UserActionInterface } from '../../interfaces/user';

import { Creators as UsersActions } from '../ducks/users';

export function* login({ payload }: UserActionInterface) {
  try {
    const { email, password } = payload.user;

    console.log('User name: ', password);
    console.log('User email: ', email);
    const response = yield call(api.post, '/sessions', { email, password });

    console.log('RESPONSE: ', response);
  } catch (err) {
    console.error(err);
  }
}
