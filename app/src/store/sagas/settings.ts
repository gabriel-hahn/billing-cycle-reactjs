import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import { SettingActionInterface, SettingInterface } from '../../interfaces/settings';

import { Creators as SettingsActions } from '../ducks/settings';

export function* loadSettings({ payload }: SettingActionInterface) {
  try {
    const { data } = yield call(api.get, '/settings');

    // yield put(SettingsActions.settingsSuccess(data));
  } catch (err) {
    yield put(SettingsActions.settingsError('Error on load settings'));
    yield put(toastrActions.add({
      type: 'error',
      title: 'Request failed',
      message: err.response.data.message,
      options: {
        timeOut: 4000,
      },
    }));
  }
}

export function* updateSettings({ payload }: SettingActionInterface) {
  try {
    console.log('');
  } catch (err) {
    yield put(SettingsActions.settingsError('Error on update settings'));
    yield put(toastrActions.add({
      type: 'error',
      title: 'Update failed',
      message: err.response.data.message,
      options: {
        timeOut: 4000,
      },
    }));
  }
}
