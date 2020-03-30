import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import api from '../../services/api';

import { pieChartConfig } from '../../config/highcharts';
import { TransactionInterface } from '../../interfaces/transaction';

interface SumInterface {
  [key: string]: number | undefined;
}

const PieChart: React.FC = () => {
  let debits: TransactionInterface[];
  let credits: TransactionInterface[];

  const getAllDataByCurrentMonth = async () => {
    const { data: debitData } = await api.get<TransactionInterface[]>('debit/allByCurrentMonth');
    const { data: creditData } = await api.get<TransactionInterface[]>('credit/allByCurrentMonth');

    debits = debitData;
    credits = creditData;
  };

  useEffect(() => {
    getAllDataByCurrentMonth();
  }, []);

  const charOptions = pieChartConfig();

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={charOptions}
    />
  );
};

export default PieChart;
