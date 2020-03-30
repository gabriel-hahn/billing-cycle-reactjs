import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import api from '../../services/api';

import { pieChartConfig } from '../../config/highcharts';
import { TransactionInterface } from '../../interfaces/transaction';
import { ChartInterface, KeyValueNumberInterface } from '../../interfaces/charts';
import { formatToChartStringObject } from '../../utils/format';

const PieChart: React.FC = () => {
  let debitsFormatted: ChartInterface[];
  let debits: TransactionInterface[];

  const [chartOptions, setChartOptions] = useState<any>();

  const formatTransactions = () => {
    const totalDebits: KeyValueNumberInterface = { };

    debits.forEach((debit) => {
      const sumValue = totalDebits[debit.type] || 0;
      totalDebits[debit.type] = debit.value ? (debit.value + sumValue) : 0;
    });

    debitsFormatted = formatToChartStringObject(totalDebits);

    setChartOptions(pieChartConfig(debitsFormatted));
  };

  const getAllDataByCurrentMonth = async () => {
    const { data: debitData } = await api.get<TransactionInterface[]>('debits/allByCurrentMonth');

    debits = debitData;

    formatTransactions();
  };

  useEffect(() => {
    getAllDataByCurrentMonth();
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

export default PieChart;
