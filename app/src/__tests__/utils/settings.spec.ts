import { getSettings, saveSettings } from '../../utils/settings';
import { SettingInterface } from '../../interfaces/settings';
import { CurrencyType, DateFormatType } from '../../enums/settings';

beforeEach(() => {
  localStorage.clear();
});

describe('Settings utils', () => {
  describe('Save settings', () => {
    it('Should save settings correctly', () => {
      const settings: SettingInterface = {
        currency: CurrencyType.REAIS,
        dateFormat: DateFormatType.PT,
      };

      saveSettings(settings);

      expect(getSettings().currency).toEqual(CurrencyType.REAIS);
      expect(getSettings().dateFormat).toEqual(DateFormatType.PT);
    });
  });

  describe('Get settings', () => {
    it('Should return default settings', () => {
      const settings = getSettings();

      expect(settings.currency).toEqual(CurrencyType.DOLAR);
      expect(settings.dateFormat).toEqual(DateFormatType.EN);
    });
  });
});
