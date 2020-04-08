import { CurrencyType, DateFormatType } from '../enums/settings';

export interface SettingInterface {
  id?: number;
  user_id?: number | null;
  currency: CurrencyType;
  dateFormat: DateFormatType;
}

export interface SettingActionInterface {
  type: string,
  payload: {
    setting: SettingInterface,
    error: string,
  },
}

export interface SettingStateInterface {
  data: SettingInterface;
  error: string | null;
  loading: boolean;
}
