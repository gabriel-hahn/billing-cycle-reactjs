import { getSettings } from './settings';

const MONTH = 30;
const THREE_MONTHS = 90;
const offset = new Date().getTimezoneOffset();

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

  dateFormat = new Date(dateFormat.getTime() + (offset * 60 * 1000));

  return dateFormat.toISOString().split('T')[0];
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
