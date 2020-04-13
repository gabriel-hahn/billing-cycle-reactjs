import { SettingInterface } from '../interfaces/settings';
import { CurrencyType, DateFormatType } from '../enums/settings';

export const saveSettings = (settings: SettingInterface): void => {
  localStorage.setItem('@bc:settings', JSON.stringify(settings));
};

export const getSettings = (): SettingInterface => {
  const settings = localStorage.getItem('@bc:settings');
  const defaultSettings: SettingInterface = {
    currency: CurrencyType.DOLAR,
    dateFormat: DateFormatType.EN,
  };

  return settings ? (JSON.parse(settings) as SettingInterface) : defaultSettings;
};
