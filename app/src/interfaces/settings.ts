import { CurrencyType, DateFormatType } from '../enums/settings';

export interface SettingInterface {
  currency: CurrencyType;
  dateFormat: DateFormatType;
}
