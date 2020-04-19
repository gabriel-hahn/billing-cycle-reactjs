import {
  formatCurrencyWithType,
  formatCurrency,
  getMoneyPersistFormat,
  getJustDigitsFromString,
  formatCurrencyForInputs,
} from '../../utils/currency';

fdescribe('Currency utils', () => {
  it('Should format number to currency with type BRL as default', () => {
    const value = 234.56;
    const valueFormatted = formatCurrencyWithType(value);

    expect(valueFormatted).toEqual('R$234.56');
  });

  it('Should format number to currency without type', () => {
    const value = 3443.00;
    const valueFormatted = formatCurrency(value);

    expect(valueFormatted).toEqual('3,443.00');
  });

  it('Should return just the numbers of a provided string', () => {
    const value = 'R$2FASDd..3/4';
    const onlyNumbers = getJustDigitsFromString(value);

    expect(onlyNumbers).toEqual(234);
  });

  it('Should format string as currency - Full format', () => {
    const value = '3234.65';
    const valueFormatted = formatCurrencyForInputs(value);

    expect(valueFormatted).toEqual('3.234,65');
  });

  it('Should format string as currency - Decimal 1 number', () => {
    const value = '3';
    const valueFormatted = formatCurrencyForInputs(value);

    expect(valueFormatted).toEqual('0,03');
  });

  it('Should format string as currency - Decimal 2 numbers', () => {
    const value = '23';
    const valueFormatted = formatCurrencyForInputs(value);

    expect(valueFormatted).toEqual('0,23');
  });

  it('Should format string as currency - Decimal 4 numbers', () => {
    const value = '4023';
    const valueFormatted = formatCurrencyForInputs(value);

    expect(valueFormatted).toEqual('40,23');
  });

  it('Should format string as currency - 1 Int number', () => {
    const value = '321';
    const valueFormatted = formatCurrencyForInputs(value);

    expect(valueFormatted).toEqual('3,21');
  });

  it('Should return empty when the value contains only characteres', () => {
    const value = ',ke';
    const valueFormatted = formatCurrencyForInputs(value);

    expect(valueFormatted).toBe('');
  });

  it('Should format value as persist value - Number only with dots', () => {
    const value = '3.255,05';
    const valueFormatted = getMoneyPersistFormat(value);

    expect(valueFormatted).toEqual('3255.05');
  });
});
