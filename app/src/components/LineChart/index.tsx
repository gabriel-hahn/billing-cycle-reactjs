import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import api from '../../services/api';

import { lineChartConfig } from '../../config/highcharts';
import { currentDateFormat, dateThreeMonthBefore } from '../../utils/date';
import { formatToChartDateObject } from '../../utils/format';
import { TransactionInterface } from '../../interfaces/transaction';
import { LineChartInterface, KeyValueNumberInterface } from '../../interfaces/charts';

const LineChart: React.FC = () => {
  let debitsFormatted: LineChartInterface[];
  let creditsFormatted: LineChartInterface[];
  let debits: TransactionInterface[];
  let credits: TransactionInterface[];

  const [chartOptions, setChartOptions] = useState<any>();

  const formatTransactions = () => {
    const totalDebits: KeyValueNumberInterface = { };
    const totalCredits: KeyValueNumberInterface = { };

    debits.forEach((debit) => {
      totalDebits[debit.date] = debit.value;
    });

    credits.forEach((credit) => {
      totalCredits[credit.date] = credit.value;
    });

    debitsFormatted = formatToChartDateObject(totalDebits);
    creditsFormatted = formatToChartDateObject(totalCredits);

    setChartOptions(lineChartConfig(creditsFormatted, debitsFormatted));
  };

  const getAllByLastThreeMonths = async () => {
    const startDate = dateThreeMonthBefore();
    const endDate = currentDateFormat();

    const { data: debitData } = await api.get<TransactionInterface[]>('debits', { params: { startDate, endDate } });
    const { data: creditData } = await api.get<TransactionInterface[]>('credits', { params: { startDate, endDate } });

    debits = debitData.reverse();
    credits = creditData.reverse();

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
