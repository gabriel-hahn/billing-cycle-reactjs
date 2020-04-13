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

import { Loading } from './styles';

const LineChart: React.FC = () => {
  let debitsFormatted: ChartInterface[];
  let creditsFormatted: ChartInterface[];
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
    const endDate = new Date();

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
    ) : (
      <Loading>
        <RotateSpinner size={30} color={globalVariables.mainBlue} />
      </Loading>
      ) }
    </>
  );
};

export default LineChart;
