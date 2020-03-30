import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import api from '../../services/api';

import { TransactionInterface } from '../../interfaces/transaction';
import { ChartInterface, KeyValueNumberInterface } from '../../interfaces/charts';
import { barChartConfig } from '../../config/highcharts';
import { formatToChartStringObject } from '../../utils/format';

const BarChart: React.FC = () => {
  let debitsFormatted: ChartInterface[];
  let creditsFormatted: ChartInterface[];
  let debits: TransactionInterface[];
  let credits: TransactionInterface[];

  const [chartOptions, setChartOptions] = useState<any>();

  const formatTransactions = () => {
    const totalDebits: KeyValueNumberInterface = { };
    const totalCredits: KeyValueNumberInterface = { };

    debits.forEach((debit) => {
      totalDebits[debit.description || 'No description'] = debit.value;
    });

    credits.forEach((credit) => {
      totalCredits[credit.description || 'No description'] = credit.value;
    });

    debitsFormatted = formatToChartStringObject(totalDebits);
    creditsFormatted = formatToChartStringObject(totalCredits);

    setChartOptions(barChartConfig([...creditsFormatted, ...debitsFormatted]));
  };

  const getTransactions = async () => {
    const { data: debitData } = await api.get<TransactionInterface[]>('debits/allRepeat');
    const { data: creditData } = await api.get<TransactionInterface[]>('credits/allRepeat');

    debits = debitData.reverse();
    credits = creditData.reverse();

    console.log('debits: ', debits);
    console.log('credits: ', credits);

    formatTransactions();
  };

  useEffect(() => {
    getTransactions();
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

export default BarChart;
