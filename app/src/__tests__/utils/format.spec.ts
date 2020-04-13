import { KeyValueNumberInterface, KeyValueStringInterface } from '../../interfaces/charts';
import {
  capitalize,
  formatToChartDateObject,
  formatToChartNumberObject,
  formatToChartStringObject,
} from '../../utils/format';

describe('Format utils', () => {
  it('Should return correct options formatted with string - number object', () => {
    const options: KeyValueNumberInterface = {
      '2/2/2020': 4123,
    };

    const optionsFormatted = formatToChartDateObject(options);

    expect(optionsFormatted).toEqual([{ name: '2/2/2020', y: 4123 }]);
  });

  it('Should return correct array of options formatted with string - number object', () => {
    const options: KeyValueNumberInterface = {
      '2/2/2020': 4123,
      '4/12/2020': 421,
    };

    const optionsFormatted = formatToChartDateObject(options);

    expect(optionsFormatted).toEqual([{ name: '2/2/2020', y: 4123 }, { name: '4/12/2020', y: 421 }]);
  });

  it('Should format to chart number format correctly', () => {
    const options: KeyValueNumberInterface = {
      '2/2/2020': 4123,
    };

    const optionsFormatted = formatToChartNumberObject(options);

    expect(optionsFormatted).toEqual([{ name: '2/2/2020', y: 4123 }]);
  });

  it('Should format to chart string format correctly', () => {
    const options: KeyValueStringInterface = {
      '2/2/2020': '4123',
    };

    const optionsFormatted = formatToChartStringObject(options);

    expect(optionsFormatted).toEqual([{ name: '2/2/2020', y: 4123 }]);
  });

  it('Should format to chart string format correctly - With zero when not contains value', () => {
    const options: KeyValueStringInterface = {
      '2/2/2020': '',
    };

    const optionsFormatted = formatToChartStringObject(options);

    expect(optionsFormatted).toEqual([{ name: '2/2/2020', y: 0 }]);
  });

  it('Should capitalize the provided string - lowercase', () => {
    const stringParam = 'test';
    const stringCapitalized = capitalize(stringParam);

    expect(stringCapitalized).toEqual('Test');
  });

  it('Should capitalize the provided string - uppercase', () => {
    const stringParam = 'TEST';
    const stringCapitalized = capitalize(stringParam);

    expect(stringCapitalized).toEqual('Test');
  });
});
