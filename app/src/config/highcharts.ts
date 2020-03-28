// export const lineChartConfig = (
//     creditsData: (number | undefined)[], debitsData: (number | undefined)[],
//   ) => (
export const lineChartConfig = (creditsData: any, debitsData: any) => (
  {
    title: {
      text: 'Credits and Debits',
    },

    subtitle: {
        text: 'Last 90 days',
    },

    colors: ['#1D84B5', '#4D7C8A', '#59C9A5'],

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
