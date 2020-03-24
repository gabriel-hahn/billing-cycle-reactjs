export const formatCurrencyWithType = (currency: number): string => (
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(currency));

export const formatCurrency = (currency: number): string => {
  const currencyFixed = formatCurrencyWithType(currency);

  return currencyFixed.substr(2, currencyFixed.length - 2);
};
