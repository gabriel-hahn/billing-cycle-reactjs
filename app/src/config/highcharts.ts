import { ChartInterface } from '../interfaces/charts';

export const lineChartConfig = (
      creditsData: ChartInterface[], debitsData: ChartInterface[],
    ) => (
  {
    title: {
      text: 'Credits and Debits',
    },

    subtitle: {
        text: 'Last 90 days',
    },

    colors: ['#1D84B5', '#4D7C8A', '#59C9A5', '#313B72', '#388659'],

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
      height: '25%',
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
          maxWidth: 500,
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
    },
    colors: ['#1D84B5', '#4D7C8A', '#59C9A5', '#313B72', '#388659'],
    title: {
      text: 'Debits',
    },
    subtitle: {
      text: 'Current month',
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
    },

    title: {
      text: 'Active credits and debits repeated',
    },

    colors: ['#1D84B5', '#4D7C8A', '#59C9A5', '#313B72', '#388659'],

    subtitle: {
      text: 'e.g. salary',
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
