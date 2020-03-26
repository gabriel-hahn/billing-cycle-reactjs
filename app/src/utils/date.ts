const LANGUAGE = 'en-EN';
const MONTH = 30;

const offset = new Date().getTimezoneOffset();

export const currentDateInputFormat = () => {
  let date = new Date();

  date = new Date(date.getTime() + (offset * 60 * 1000));

  return date.toISOString().split('T')[0];
};

export const currentDateFormat = (): string => new Date().toLocaleDateString(LANGUAGE);
export const currentDate = (): Date => new Date();

export const dateOneMonthBefore = (): Date => {
  const date = new Date();

  date.setDate(date.getDate() - MONTH);

  return date;
};

export const dateOneMonthBeforeFormat = (): string => {
  const date = new Date();

  date.setDate(date.getDate() - MONTH);

  return date.toLocaleDateString(LANGUAGE);
};

export const toLocaleDateString = (date: Date) => date.toLocaleDateString(LANGUAGE);
