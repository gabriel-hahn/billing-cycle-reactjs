import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { RotateSpinner } from 'react-spinners-kit';
import api from '../../services/api';

import { lineChartConfig } from '../../config/highcharts';
import { dateThreeMonthBefore } from '../../utils/date';
import { formatToChartDateObject } from '../../utils/format';
import { TransactionInterface } from '../../interfaces/transaction';
import { ChartInterface, KeyValueNumberInterface } from '../../interfaces/charts';
import { globalVariables } from '../../styles/variables';
import { ChartDataProps } from '../../pages/Dashboard/Report';

import { Loading } from './styles';

const LineChart: React.FC<ChartDataProps> = ({ onEmpty }) => {
  let debitsFormatted: ChartInterface[];
  let creditsFormatted: ChartInterface[];
  let debits: TransactionInterface[];
  let credits: TransactionInterface[];

  const [chartOptions, setChartOptions] = useState<unknown>();

  const formatTransactions = () => {
    const totalDebits: KeyValueNumberInterface = { };
    const totalCredits: KeyValueNumberInterface = { };

    debits.forEach((debit) => {
      const value = totalDebits[debit.date] || 0;
      const total = debit.value ? (value + debit.value) : value;

      totalDebits[debit.date] = total;
    });

    credits.forEach((credit) => {
      const value = totalCredits[credit.date] || 0;
      const total = credit.value ? (value + credit.value) : value;

      totalCredits[credit.date] = total;
    });

    debitsFormatted = formatToChartDateObject(totalDebits);
    creditsFormatted = formatToChartDateObject(totalCredits);

    setChartOptions(lineChartConfig(creditsFormatted, debitsFormatted));
  };

  const getAllByLastThreeMonths = async () => {
    const startDate = dateThreeMonthBefore();
    const endDate = new Date();

    const { data: debitData } = await api.get<TransactionInterface[]>('debits', { params: { startDate, endDate } });
    const { data: creditData } = await api.get<TransactionInterface[]>('credits', { params: { startDate, endDate } });

    if (debitData.length === 0 && creditData.length === 0) {
      onEmpty();

      return;
    }

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
    ) : (
      <Loading>
        <RotateSpinner size={30} color={globalVariables.mainBlue} />
      </Loading>
      ) }
    </>
  );
};

export default LineChart;
