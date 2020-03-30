const LANGUAGE = 'en-EN';
const MONTH = 30;
const THREE_MONTHS = 90;

const offset = new Date().getTimezoneOffset();

export const currentDateInputFormat = (date?: Date) => {
  let dateFormat = date;

  if (!dateFormat) {
    dateFormat = new Date();
  }

  dateFormat = new Date(dateFormat.getTime() + (offset * 60 * 1000));

  return dateFormat.toISOString().split('T')[0];
};

export const currentDateFormat = (): string => new Date().toLocaleDateString(LANGUAGE);
export const currentDate = (): Date => new Date();

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

  return date.toLocaleDateString(LANGUAGE);
};

export const toLocaleDateString = (date: Date) => date.toLocaleDateString(LANGUAGE);
