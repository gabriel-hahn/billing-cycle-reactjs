import { ChartInterface } from '../interfaces/charts';
import { globalVariables } from '../styles/variables';

export const lineChartConfig = (
      creditsData: ChartInterface[], debitsData: ChartInterface[],
    ) => (
  {
    title: {
      text: 'Credits and Debits',
    },

    subtitle: {
        text: 'Last 3 months',
    },

    colors: [
      globalVariables.mainBlue,
      globalVariables.mainGreen,
      globalVariables.mainPink,
    ],

    yAxis: {
      title: {
        text: 'Amount',
      },
    },

    xAxis: {
      labels: {
        enabled: false,
      },
    },

    chart: {
      borderRadius: 5,
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },

    series: [{
        name: 'Credits',
        data: creditsData,
    }, {
        name: 'Debits',
        data: debitsData,
    }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: '90vw',
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
          },
        },
      }],
    },
  }
);

export const pieChartConfig = (debitsData: ChartInterface[]) => (
  {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      borderRadius: 5,
    },
    colors: [
      globalVariables.mainBlue,
      globalVariables.mainGreen,
      globalVariables.mainPink,
    ],
    title: {
      text: 'Debits',
    },
    subtitle: {
      text: 'Current month (%)',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [{
      name: 'Percent',
      colorByPoint: true,
      data: debitsData,
    }],
  }
);

export const barChartConfig = (transactionsData: ChartInterface[]) => (
  {
    chart: {
      inverted: true,
      polar: false,
      borderRadius: 5,
    },

    title: {
      text: 'Cash flow',
    },

    colors: [
      globalVariables.mainBlue,
      globalVariables.mainGreen,
      globalVariables.mainPink,
    ],

    subtitle: {
      text: 'Last 3 months',
    },

    xAxis: {
      categories: transactionsData.map(transaction => transaction.name),
    },

    series: [{
      type: 'column',
      colorByPoint: true,
      data: transactionsData.map(transaction => transaction.y),
      showInLegend: false,
    }],
  }
);
