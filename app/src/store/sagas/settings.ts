import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import { SettingActionInterface } from '../../interfaces/settings';

import { Creators as SettingsActions } from '../ducks/settings';

export function* loadSettings() {
  try {
    const { data } = yield call(api.get, '/settings');

    if (data !== []) {
      data.dateFormat = data.date_format;

      yield put(SettingsActions.settingsSuccess(data));
    }
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

export function* updateSettings({ payload: { setting } }: SettingActionInterface) {
  try {
    const { data } = yield call(api.put, '/settings', setting);

    data.dateFormat = data.date_format;

    yield put(SettingsActions.settingsUpdateSuccess(data));
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
