import React from 'react';
import { useSelector } from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { lineChartConfig } from '../../config/highcharts';
import { toLocaleDateString } from '../../utils/date';
import { StoreInterface } from '../../interfaces/store';
import { TransactionType } from '../../interfaces/transaction';

interface SumInterface {
  [key: string]: number | undefined;
}

const LineChart: React.FC = () => {
  const transactions = useSelector((state: StoreInterface) => state.transactions.data);
  const debits = transactions.filter(transaction => (
    transaction.category === TransactionType.DEBIT));
  const credits = transactions.filter(transaction => (
    transaction.category === TransactionType.CREDIT));

  const totalDebits: SumInterface = { };
  const totalCredits: SumInterface = { };

  debits.forEach((debit) => {
    totalDebits[debit.date] = debit.value;
  });

  credits.forEach((credit) => {
    totalCredits[credit.date] = credit.value;
  });

  const debitsFormatted = Object.entries(totalDebits).map((itemArr) => {
    const date = toLocaleDateString(new Date(itemArr[0]));

    return {
      y: itemArr[1],
      name: date,
    };
  });

  const creditsFormatted = Object.entries(totalCredits).map((itemArr) => {
    const date = toLocaleDateString(new Date(itemArr[0]));

    return {
      y: itemArr[1],
      name: date,
    };
  });

  const charOptions = lineChartConfig(creditsFormatted, debitsFormatted);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={charOptions}
    />
  );
};

export default LineChart;
