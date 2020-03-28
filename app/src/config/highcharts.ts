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

export const pieChartConfig = () => (
  {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    colors: ['#1D84B5', '#4D7C8A', '#59C9A5', '#313B72', '#388659'],
    title: {
      text: 'Credits and Debits this month',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>R$ {point.percentage:.1f}</b>',
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
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true,
      }, {
        name: 'Internet Explorer',
        y: 11.84,
      }, {
        name: 'Firefox',
        y: 10.85,
      }, {
        name: 'Edge',
        y: 4.67,
      }, {
        name: 'Safari',
        y: 4.18,
      }, {
        name: 'Other',
        y: 7.05,
      }],
    }],
  }
);

export const barChartConfig = () => (
  {
    chart: {
      type: 'column',
    },
    colors: ['#1D84B5', '#4D7C8A', '#59C9A5', '#313B72', '#388659'],
    title: {
      text: 'Monthly credits and debits repeated (e.g. salary)',
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Rainfall (mm)',
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>'
        + '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

    }, {
        name: 'New York',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

    }, {
        name: 'London',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

    }, {
        name: 'Berlin',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

    }],
  }
);
