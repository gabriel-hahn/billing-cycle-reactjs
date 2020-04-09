import React, { useEffect, useState, FormEvent } from 'react';

import { SettingInterface } from '../../../interfaces/settings';
import { CurrencyType, DateFormatType } from '../../../enums/settings';
import { getSettings, saveSettings } from '../../../utils/settings';

import {
  Container,
  SelectsContainer,
  SelectItem,
  SelectTitle,
  Select,
} from './styles';

const Settings = () => {
  const settings = getSettings();

  const [currency, setCurrency] = useState<CurrencyType>(settings.currency);
  const [dateFormat, setDateFormat] = useState<DateFormatType>(settings.dateFormat);

  const handleSettingsAutoSave = () => {
    const newSettings: SettingInterface = {
      dateFormat,
      currency,
    };

    saveSettings(newSettings);
  };

  useEffect(() => {
    if ((settings.currency !== currency) || (settings.dateFormat !== dateFormat)) {
      handleSettingsAutoSave();
    }
  }, [currency, dateFormat]);

  const handleCurrencyChanged = (e: FormEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;

    setCurrency((value as CurrencyType));
  };

  const handleDateFormatChanged = (e: FormEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;

    setDateFormat((value as DateFormatType));
  };

  return (
    <Container>
      <SelectsContainer>
        <SelectItem>
          <SelectTitle>Currency</SelectTitle>
          <Select value={currency} onChange={handleCurrencyChanged}>
            { Object.entries(CurrencyType).map((type : [string, CurrencyType]) => (
              <option key={type[0]} value={type[1]}>{type[1]} - {type[0]}</option>
            )) }
          </Select>
        </SelectItem>
        <SelectItem>
          <SelectTitle>Date format</SelectTitle>
          <Select value={dateFormat} onChange={handleDateFormatChanged}>
            { Object.entries(DateFormatType).map((type : [string, DateFormatType]) => (
              <option key={type[0]} value={type[0]}>{type[0]}</option>
            )) }
          </Select>
        </SelectItem>
      </SelectsContainer>
    </Container>
  );
};

export default Settings;
