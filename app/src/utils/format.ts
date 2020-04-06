import { toLocaleDateString } from './date';
import { KeyValueNumberInterface, KeyValueStringInterface } from '../interfaces/charts';

export const formatToChartDateObject = (transactions: KeyValueNumberInterface) => (
  Object.entries(transactions).map((itemArr) => {
    const date = toLocaleDateString(new Date(itemArr[0]));

    return {
      y: itemArr[1],
      name: date,
    };
}));

export const formatToChartNumberObject = (transactions: KeyValueNumberInterface) => (
  Object.entries(transactions).map(itemArr => ({
    y: itemArr[1],
    name: itemArr[0],
  })));

export const formatToChartStringObject = (transactions: KeyValueStringInterface) => (
  Object.entries(transactions).map(itemArr => ({
    y: itemArr[1] ? +itemArr[1] : 0,
    name: itemArr[0],
  })));

export const capitalize = (str: string) => {
  const firstLetter = str.toLowerCase().charAt(0).toUpperCase();
  const strCapitalized = str.toLowerCase().slice(1);

  return firstLetter.concat(strCapitalized);
}
