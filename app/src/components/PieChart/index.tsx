import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { RotateSpinner } from 'react-spinners-kit';
import api from '../../services/api';

import { pieChartConfig } from '../../config/highcharts';
import { TransactionInterface } from '../../interfaces/transaction';
import { ChartInterface, KeyValueNumberInterface } from '../../interfaces/charts';
import { formatToChartNumberObject, capitalize } from '../../utils/format';
import { globalVariables } from '../../styles/variables';

import { Loading } from './styles';

const PieChart: React.FC = () => {
  let debitsFormatted: ChartInterface[];
  let debits: TransactionInterface[];

  const [chartOptions, setChartOptions] = useState<any>();

  const formatTransactions = () => {
    const totalDebits: KeyValueNumberInterface = { };

    debits.forEach((debit) => {
      const sumValue = totalDebits[debit.type] || 0;

      totalDebits[capitalize(debit.type)] = debit.value ? (debit.value + sumValue) : 0;
    });

    debitsFormatted = formatToChartNumberObject(totalDebits);

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
    ) : (
      <Loading>
        <RotateSpinner size={30} color={globalVariables.mainBlue} />
      </Loading>
      ) }
    </>
  );
};

export default PieChart;
