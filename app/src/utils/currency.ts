export const formatCurrencyWithType = (currency: number): string => (
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(currency));

export const formatCurrency = (currency: number): string => {
  const currencyFixed = formatCurrencyWithType(currency);

  return currencyFixed.replace('R$', '');
};

export const getJustDigitsFromString = (valueStr: string): number => {
  const auxValue = valueStr.match(/\d+/g);

  return auxValue ? parseInt(auxValue.join(''), 10) : 0;
};

export const formatCurrencyForInputs = (valueStr: string): string => {
  const justDigits = getJustDigitsFromString(valueStr);

  const value = justDigits ? justDigits.toString() : '';

  if (value.length === 1) {
    return `0,0${value}`;
  }

  if (value.length === 2) {
    return `0,${value}`;
  }

  if (value.length === 3) {
    return `${value.substr(0, 1)},${value.substr(1, 3)}`;
  }

  if (value.length <= 5) {
    const decimals = value.substr(value.length - 2, value.length);
    const rest = value.substr(0, value.length - 2);

    return `${rest},${decimals}`;
  }

  const decimals = value.substr(value.length - 2, value.length);
  const rest = value.substr(0, value.length - 2).split('').reverse().join('');
  const arrSufix = rest.match(/.{1,3}/g);

  const sufix = arrSufix ? arrSufix.reverse().join('.') : '';

  return `${sufix},${decimals}`;
};

export const getMoneyPersistFormat = (value: string) => value.replace('.', '').replace(',', '.');
