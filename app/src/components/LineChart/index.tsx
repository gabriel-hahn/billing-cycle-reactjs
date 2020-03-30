import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import api from '../../services/api';

import { lineChartConfig } from '../../config/highcharts';
import { toLocaleDateString, currentDateFormat, dateThreeMonthBefore } from '../../utils/date';
import { TransactionInterface } from '../../interfaces/transaction';
import { LineChartInterface } from '../../interfaces/charts';

interface SumInterface {
  [key: string]: number | undefined;
}

const LineChart: React.FC = () => {
  let debitsFormatted: LineChartInterface[];
  let creditsFormatted: LineChartInterface[];
  let debits: TransactionInterface[];
  let credits: TransactionInterface[];

  const [chartOptions, setChartOptions] = useState<any>();

  const formatToChartObject = (transactions: SumInterface) => (
    Object.entries(transactions).map((itemArr) => {
      const date = toLocaleDateString(new Date(itemArr[0]));

      return {
        y: itemArr[1],
        name: date,
      };
  }));

  const formatTransactions = () => {
    const totalDebits: SumInterface = { };
    const totalCredits: SumInterface = { };

    debits.forEach((debit) => {
      totalDebits[debit.date] = debit.value;
    });

    credits.forEach((credit) => {
      totalCredits[credit.date] = credit.value;
    });

    debitsFormatted = formatToChartObject(totalDebits);
    creditsFormatted = formatToChartObject(totalCredits);

    setChartOptions(lineChartConfig(creditsFormatted, debitsFormatted));
  };

  const getAllByLastThreeMonths = async () => {
    const startDate = dateThreeMonthBefore();
    const endDate = currentDateFormat();

    const { data: debitData } = await api.get<TransactionInterface[]>('debits', { params: { startDate, endDate } });
    const { data: creditData } = await api.get<TransactionInterface[]>('credits', { params: { startDate, endDate } });

    debits = debitData;
    credits = creditData;

    formatTransactions();
  };

  useEffect(() => {
    getAllByLastThreeMonths();
  }, []);

  return (
    <>
      { chartOptions ? (
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
    ) : <h3>Loading</h3> }
    </>
  );
};

export default LineChart;
