import { toLocaleDateString } from './date';
import { KeyValueNumberInterface } from '../interfaces/charts';

export const formatToChartDateObject = (transactions: KeyValueNumberInterface) => (
  Object.entries(transactions).map((itemArr) => {
    const date = toLocaleDateString(new Date(itemArr[0]));

    return {
      y: itemArr[1],
      name: date,
    };
}));

export const formatToChartStringObject = (transactions: KeyValueNumberInterface) => (
  Object.entries(transactions).map(itemArr => ({
    y: itemArr[1],
    name: itemArr[0],
  })));
