import React from 'react';
import { useSelector } from 'react-redux';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { barChartConfig } from '../../config/highcharts';
import { StoreInterface } from '../../interfaces/store';
import { TransactionType } from '../../interfaces/transaction';

interface SumInterface {
  [key: string]: number | undefined;
}

const BarChart: React.FC = () => {
  const transactions = useSelector((state: StoreInterface) => state.transactions.data);
  const debits = transactions.filter(transaction => (
    transaction.category === TransactionType.DEBIT));
  const credits = transactions.filter(transaction => (
    transaction.category === TransactionType.CREDIT));

  const charOptions = barChartConfig();

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={charOptions}
    />
  );
};

export default BarChart;
