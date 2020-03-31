import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import api from '../../services/api';

import { CashFlowInterface } from '../../interfaces/transaction';
import { getMonthDescriptionByMonth } from '../../utils/date';
import { barChartConfig } from '../../config/highcharts';
import { KeyValueStringInterface, ChartInterface } from '../../interfaces/charts';
import { formatToChartStringObject } from '../../utils/format';

const BarChart: React.FC = () => {
  let cashFlowFormatted: ChartInterface[];
  const [chartOptions, setChartOptions] = useState<any>();

  const formatTransactions = (cashFlow: CashFlowInterface) => {
    const flowData: KeyValueStringInterface = {};

    Object.entries(cashFlow).forEach((monthData) => {
      const month = getMonthDescriptionByMonth(monthData[0]);

      flowData[month] = monthData[1].toFixed(2);
    });

    cashFlowFormatted = formatToChartStringObject(flowData);

    setChartOptions(barChartConfig(cashFlowFormatted));
  };

  const getTransactions = async () => {
    const { data: cashFlow } = await api.get<CashFlowInterface>('transactions/cashFlow');

    formatTransactions(cashFlow);
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
