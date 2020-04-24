import { getSettings } from './settings';

const MONTH = 30;
const THREE_MONTHS = 90;

// In some cases isn't possible use .toISOString because it takes the default timezone, creating
// some issues with users from other timezones.
const formatFromLocaleFormatToDateInput = (dateStr: string): string => {
  const dateArr = dateStr.split('/');

  return `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`;
};

export const getLanguageState = () => {
  const { dateFormat } = getSettings();

  return dateFormat;
};

export const toLocaleDateString = (date: Date) => date.toLocaleDateString(getLanguageState());

export const currentDateInputFormat = (date?: Date) => {
  let dateFormat = date;

  if (!dateFormat) {
    dateFormat = new Date();
  }

  const localeStringDateFormat = dateFormat.toLocaleDateString(getLanguageState());

  return formatFromLocaleFormatToDateInput(localeStringDateFormat);
};

export const currentDateFormat = () => {
  const date = new Date().toLocaleDateString(getLanguageState());

  return date;
};

export const dateOneMonthBefore = (): Date => {
  const date = new Date();

  date.setDate(date.getDate() - MONTH);

  return date;
};

export const dateThreeMonthBefore = (): Date => {
  const date = new Date();

  date.setDate(date.getDate() - THREE_MONTHS);

  return date;
};

export const dateOneMonthBeforeFormat = (): string => {
  const date = new Date();

  date.setDate(date.getDate() - MONTH);

  return date.toLocaleDateString(getLanguageState());
};

export const getMonthDescriptionByMonth = (month: string) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return months[parseInt(month, 10)];
};

export const toBarFormat = (date: string) => {
  const arr = date.split('-');

  return `${arr[1]}/${arr[2]}/${arr[0]}`;
};

export const formatFromPtToEn = (dateStr: string): string => {
  const dateArr = dateStr.split('/');
  const regexRemoveInitialZeros = /^(0+)/g;

  const day = dateArr[0].replace(regexRemoveInitialZeros, '');
  const month = dateArr[1].replace(regexRemoveInitialZeros, '');
  const year = dateArr[2];

  return `${month}/${day}/${year}`;
};
