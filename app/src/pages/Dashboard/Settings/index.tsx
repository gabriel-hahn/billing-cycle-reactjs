import React, { useEffect, useState, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Creators as SettingsActions } from '../../../store/ducks/settings';
import { StoreInterface } from '../../../interfaces/store';
import { CurrencyType, DateFormatType } from '../../../enums/settings';
import { SettingInterface } from '../../../interfaces/settings';

import {
  Container,
  SelectsContainer,
  SelectItem,
  SelectTitle,
  Select,
} from './styles';

const Settings = () => {
  const dispatch = useDispatch();
  const { data: settingsData } = useSelector((state: StoreInterface) => state.settings);

  const [currency, setCurrency] = useState<CurrencyType>(settingsData.currency);
  const [dateFormat, setDateFormat] = useState<DateFormatType>(settingsData.dateFormat);

  const handleSettingsAutoSave = () => {
    const newSettings: SettingInterface = {
      id: settingsData.id,
      dateFormat: dateFormat || DateFormatType.EN,
      currency: currency || CurrencyType.DOLAR,
    };

    dispatch(SettingsActions.settingsUpdateRequest(newSettings));
  };

  useEffect(() => {
    if ((settingsData.currency !== currency) || (settingsData.dateFormat !== dateFormat)) {
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
              <option key={type[0]} value={type[0]}>{type[1]} - {type[0]}</option>
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
