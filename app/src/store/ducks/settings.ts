import {
  SettingInterface,
  SettingStateInterface,
  SettingActionInterface,
} from '../../interfaces/settings';
import { CurrencyType, DateFormatType } from '../../enums/settings';

export const Types = {
  SETTINGS_REQUEST: '@settings/SETTINGS_REQUEST',
  SETTINGS_SUCCESS: '@settings/SETTINGS_SUCCESS',
  SETTINGS_UPDATE_REQUEST: '@settings/SETTINGS_UPDATE_REQUEST',
  SETTINGS_UPDATE_SUCCESS: '@settings/SETTINGS_UPDATE_SUCCESS',
  SETTINGS_ERROR: '@settings/SETTINGS_ERROR',
};

const INITIAL_STATE: SettingStateInterface = {
  data: {
    currency: CurrencyType.DOLAR,
    dateFormat: DateFormatType.EN,
  },
  error: null,
  loading: false,
};

export default function Settings(state = INITIAL_STATE, action: SettingActionInterface) {
  switch (action.type) {
    case Types.SETTINGS_REQUEST:
    case Types.SETTINGS_UPDATE_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.SETTINGS_SUCCESS:
    case Types.SETTINGS_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.setting,
      };
    case Types.SETTINGS_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  settingsRequest: (setting: SettingInterface) => ({
    type: Types.SETTINGS_REQUEST,
    payload: { setting },
  }),
  settingsUpdateRequest: (setting: SettingInterface) => ({
    type: Types.SETTINGS_UPDATE_REQUEST,
    payload: { setting },
  }),
  settingsSuccess: (setting: SettingInterface) => ({
    type: Types.SETTINGS_SUCCESS,
    payload: { setting },
  }),
  settingsUpdateSuccess: (setting: SettingInterface) => ({
    type: Types.SETTINGS_UPDATE_SUCCESS,
    payload: { setting },
  }),
  settingsError: (error: string) => ({ type: Types.SETTINGS_ERROR, payload: { error } }),
};
