import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexStroke,
  ApexDataLabels,
  ApexXAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexPlotOptions,
  ApexYAxis,
  ApexFill,
  ApexMarkers,
  ApexTheme,
  ApexNonAxisChartSeries,
  ApexLegend,
  ApexResponsive,
  ApexStates
} from 'ng-apexcharts';

import { colors } from 'app/colors.const';
import { CoreConfigService } from '@core/services/config.service';

// interface ChartOptions
export interface ChartOptions {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  dataLabels?: ApexDataLabels;
  grid?: ApexGrid;
  stroke?: ApexStroke;
  legend?: ApexLegend;
  title?: ApexTitleSubtitle;
  colors?: string[];
  tooltip?: ApexTooltip;
  plotOptions?: ApexPlotOptions;
  yaxis?: ApexYAxis;
  fill?: ApexFill;
  labels?: string[];
  markers: ApexMarkers;
  theme: ApexTheme;
}

export interface ChartOptions2 {
  // Apex-non-axis-chart-series
  series?: ApexNonAxisChartSeries;
  chart?: ApexChart;
  stroke?: ApexStroke;
  tooltip?: ApexTooltip;
  dataLabels?: ApexDataLabels;
  fill?: ApexFill;
  colors?: string[];
  legend?: ApexLegend;
  labels?: any;
  plotOptions?: ApexPlotOptions;
  responsive?: ApexResponsive[];
  markers?: ApexMarkers[];
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis;
  states?: ApexStates;
}

@Component({
  selector: 'app-apex',
  templateUrl: './apex.component.html',
  styleUrls: ['./apex.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ApexComponent implements OnInit {
  @ViewChild('apexLineAreaChartRef') apexLineAreaChartRef: any;
  @ViewChild('apexColumnChartRef') apexColumnChartRef: any;
  @ViewChild('apexScatterChartRef') apexScatterChartRef: any;
  @ViewChild('apexLineChartRef') apexLineChartRef: any;
  @ViewChild('apexBarChartRef') apexBarChartRef: any;
  @ViewChild('apexHeatmapChartRef') apexHeatmapChartRef: any;
  @ViewChild('apexDonutChartRef') apexDonutChartRef: any;
  @ViewChild('apexCandlestickChartRef') apexCandlestickChartRef: any;
  @ViewChild('apexRadarChartRef') apexRadarChartRef: any;
  @ViewChild('apexRadialChartRef') apexRadialChartRef: any;

  // public
  public contentHeader: object;

  public apexLineChart: Partial<ChartOptions>;
  public apexLineAreaChart: Partial<ChartOptions>;
  public apexColumnChart: Partial<ChartOptions>;
  public apexBarChart: Partial<ChartOptions>;
  public apexCandlestickChart: Partial<ChartOptions>;
  public apexScatterChart: Partial<ChartOptions>;
  public apexHeatmapChart: Partial<ChartOptions>;
  public apexDonutChart: Partial<ChartOptions2>;
  public apexRadialChart: Partial<ChartOptions2>;
  public apexRadarChart: Partial<ChartOptions>;
  public isMenuToggled = false;

  public radioModel = 1;

  // ng2-flatpickr options
  public DateRangeOptions = {
    altInput: true,
    mode: 'range',
    altInputClass: 'form-control flat-picker bg-transparent border-0 shadow-none flatpickr-input',
    defaultDate: ['2019-05-01', '2019-05-10'],
    altFormat: 'Y-n-j'
  };

  // Color Variables
  chartColors = {
    column: {
      series1: '#826af9',
      series2: '#d2b0ff',
      bg: '#f8d3ff'
    },
    success: {
      shade_100: '#7eefc7',
      shade_200: '#06774f'
    },
    donut: {
      series1: '#ffe700',
      series2: '#00d4bd',
      series3: '#826bf8',
      series4: '#2b9bf4',
      series5: '#FFA1A1'
    },
    area: {
      series3: '#a4f8cd',
      series2: '#60f2ca',
      series1: '#2bdac7'
    }
  };

  // Heatmap data generate
  public generateHeatmapData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = 'w' + (i + 1).toString();
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   */
  constructor(private _coreConfigService: CoreConfigService) {
    // Apex Line chart
    this.apexLineAreaChart = {
      series: [
        {
          name: 'Visits',
          data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375]
        },
        {
          name: 'Clicks',
          data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275]
        },
        {
          name: 'Sales',
          data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140, 180, 220]
        }
      ],
      chart: {
        height: 400,
        type: 'area',
        stacked: true,
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      colors: [this.chartColors.area.series1, this.chartColors.area.series2, this.chartColors.area.series3],
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 1,
        type: 'solid'
      },
      tooltip: {
        shared: false
      },
      stroke: {
        show: false,
        curve: 'straight'
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left'
      },
      xaxis: {
        categories: [
          '7/12',
          '8/12',
          '9/12',
          '10/12',
          '11/12',
          '12/12',
          '13/12',
          '14/12',
          '15/12',
          '16/12',
          '17/12',
          '18/12',
          '19/12',
          '20/12'
        ]
      }
    };

    // Apex Line Area Chart
    this.apexLineChart = {
      series: [
        {
          data: [280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50]
        }
      ],
      chart: {
        height: 400,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      markers: {
        strokeWidth: 7,
        strokeOpacity: 1,
        strokeColors: [colors.solid.white],
        colors: [colors.solid.warning]
      },
      colors: [colors.solid.warning],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      xaxis: {
        categories: [
          '7/12',
          '8/12',
          '9/12',
          '10/12',
          '11/12',
          '12/12',
          '13/12',
          '14/12',
          '15/12',
          '16/12',
          '17/12',
          '18/12',
          '19/12',
          '20/12',
          '21/12'
        ]
      },
      tooltip: {
        custom: function (data) {
          return (
            '<div class="px-1 py-50">' +
            '<span>' +
            data.series[data.seriesIndex][data.dataPointIndex] +
            '%</span>' +
            '</div>'
          );
        }
      }
    };

    // Apex Column Chart
    this.apexColumnChart = {
      series: [
        {
          name: 'Apple',
          data: [90, 120, 55, 100, 80, 125, 175, 70, 88, 180]
        },
        {
          name: 'Samsung',
          data: [85, 100, 30, 40, 95, 90, 30, 110, 62, 20]
        }
      ],
      chart: {
        type: 'bar',
        height: 400,
        stacked: true,
        toolbar: {
          show: false
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left'
      },
      plotOptions: {
        bar: {
          columnWidth: '15%',
          colors: {
            backgroundBarColors: [
              this.chartColors.column.bg,
              this.chartColors.column.bg,
              this.chartColors.column.bg,
              this.chartColors.column.bg,
              this.chartColors.column.bg
            ],
            backgroundBarRadius: 10
          }
        }
      },
      colors: [this.chartColors.column.series1, this.chartColors.column.series2],
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12']
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands';
          }
        }
      }
    };

    // Apex Bar Chart
    this.apexBarChart = {
      series: [
        {
          data: [700, 350, 480, 600, 210, 550, 150]
        }
      ],
      chart: {
        height: 400,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '30%',
          endingShape: 'rounded'
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: false
          }
        }
      },
      colors: [colors.solid.info],
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['MON, 11', 'THU, 14', 'FRI, 15', 'MON, 18', 'WED, 20', 'FRI, 21', 'MON, 23']
      }
    };

    // Apex Candlestick Chart
    this.apexCandlestickChart = {
      series: [
        {
          data: [
            {
              x: new Date(1538778600000),
              y: [150, 170, 50, 100]
            },
            {
              x: new Date(1538780400000),
              y: [200, 400, 170, 330]
            },
            {
              x: new Date(1538782200000),
              y: [330, 340, 250, 280]
            },
            {
              x: new Date(1538784000000),
              y: [300, 330, 200, 320]
            },
            {
              x: new Date(1538785800000),
              y: [320, 450, 280, 350]
            },
            {
              x: new Date(1538787600000),
              y: [300, 350, 80, 250]
            },
            {
              x: new Date(1538789400000),
              y: [200, 330, 170, 300]
            },
            {
              x: new Date(1538791200000),
              y: [200, 220, 70, 130]
            },
            {
              x: new Date(1538793000000),
              y: [220, 270, 180, 250]
            },
            {
              x: new Date(1538794800000),
              y: [200, 250, 80, 100]
            },
            {
              x: new Date(1538796600000),
              y: [150, 170, 50, 120]
            },
            {
              x: new Date(1538798400000),
              y: [110, 450, 10, 420]
            },
            {
              x: new Date(1538800200000),
              y: [400, 480, 300, 320]
            },
            {
              x: new Date(1538802000000),
              y: [380, 480, 350, 450]
            }
          ]
        }
      ],
      chart: {
        height: 400,
        type: 'candlestick',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: colors.solid.success,
            downward: colors.solid.danger
          }
        },
        bar: {
          columnWidth: '40%'
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },

      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
    };

    // Apex Scatter Chart
    this.apexScatterChart = {
      series: [
        {
          name: 'Angular',
          data: [
            [5.4, 170],
            [5.4, 100],
            [6.3, 170],
            [5.7, 140],
            [5.9, 130],
            [7.0, 150],
            [8.0, 120],
            [9.0, 170],
            [10.0, 190],
            [11.0, 220],
            [12.0, 170],
            [13.0, 230]
          ]
        },
        {
          name: 'Vue',
          data: [
            [14.0, 220],
            [15.0, 280],
            [16.0, 230],
            [18.0, 320],
            [17.5, 280],
            [19.0, 250],
            [20.0, 350],
            [20.5, 320],
            [20.0, 320],
            [19.0, 280],
            [17.0, 280],
            [22.0, 300],
            [18.0, 120]
          ]
        },
        {
          name: 'React',
          data: [
            [14.0, 290],
            [13.0, 190],
            [20.0, 220],
            [21.0, 350],
            [21.5, 290],
            [22.0, 220],
            [23.0, 140],
            [19.0, 400],
            [20.0, 200],
            [22.0, 90],
            [20.0, 120]
          ]
        }
      ],
      chart: {
        height: 400,
        type: 'scatter',
        zoom: {
          enabled: true,
          type: 'xy'
        },
        toolbar: {
          show: false
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left'
      },
      colors: [colors.solid.warning, colors.solid.primary, colors.solid.success],
      xaxis: {
        tickAmount: 10,
        labels: {
          formatter: function (val) {
            return parseFloat(val).toFixed(1);
          }
        }
      },
      yaxis: {
        tickAmount: 7
      }
    };

    // Apex Heatmap Chart
    this.apexHeatmapChart = {
      series: [
        {
          name: 'SUN',
          data: this.generateHeatmapData(24, {
            min: 0,
            max: 60
          })
        },
        {
          name: 'MON',
          data: this.generateHeatmapData(24, {
            min: 0,
            max: 60
          })
        },
        {
          name: 'TUE',
          data: this.generateHeatmapData(24, {
            min: 0,
            max: 60
          })
        },
        {
          name: 'WED',
          data: this.generateHeatmapData(24, {
            min: 0,
            max: 60
          })
        },
        {
          name: 'THU',
          data: this.generateHeatmapData(24, {
            min: 0,
            max: 60
          })
        },
        {
          name: 'FRI',
          data: this.generateHeatmapData(24, {
            min: 0,
            max: 60
          })
        },
        {
          name: 'SAT',
          data: this.generateHeatmapData(24, {
            min: 0,
            max: 60
          })
        }
      ],
      chart: {
        height: 350,
        type: 'heatmap',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        heatmap: {
          enableShades: false,

          colorScale: {
            ranges: [
              {
                from: 0,
                to: 10,
                name: '0-10',
                color: '#b9b3f8'
              },
              {
                from: 11,
                to: 20,
                name: '10-20',
                color: '#aba4f6'
              },
              {
                from: 21,
                to: 30,
                name: '20-30',
                color: '#9d95f5'
              },
              {
                from: 31,
                to: 40,
                name: '30-40',
                color: '#8f85f3'
              },
              {
                from: 41,
                to: 50,
                name: '40-50',
                color: '#8176f2'
              },
              {
                from: 51,
                to: 60,
                name: '50-60',
                color: '#7367f0'
              }
            ]
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        position: 'bottom'
      },
      xaxis: {
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      }
    };

    // Apex Donut Chart
    this.apexDonutChart = {
      series: [85, 16, 50, 50],
      chart: {
        height: 350,
        type: 'donut'
      },
      colors: [
        this.chartColors.donut.series1,
        this.chartColors.donut.series2,
        this.chartColors.donut.series3,
        this.chartColors.donut.series5
      ],
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: '2rem',
                fontFamily: 'Montserrat'
              },
              value: {
                fontSize: '1rem',
                fontFamily: 'Montserrat',
                formatter: function (val) {
                  return parseInt(val) + '%';
                }
              },
              total: {
                show: true,
                fontSize: '1.5rem',
                label: 'Operational',
                formatter: function (w) {
                  return '31%';
                }
              }
            }
          }
        }
      },
      legend: {
        show: true,
        position: 'bottom'
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 300
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    };

    // Apex Radial Chart
    this.apexRadialChart = {
      series: [80, 50, 35],
      labels: ['Comments', 'Replies', 'Shares'],
      chart: {
        height: 400,
        type: 'radialBar'
      },
      colors: [this.chartColors.donut.series1, this.chartColors.donut.series2, this.chartColors.donut.series4],
      plotOptions: {
        radialBar: {
          // size: 185,
          hollow: {
            size: '25%'
          },
          track: {
            margin: 15
          },
          dataLabels: {
            name: {
              fontSize: '2rem',
              fontFamily: 'Montserrat'
            },
            value: {
              fontSize: '1rem',
              fontFamily: 'Montserrat'
            },
            total: {
              show: true,
              fontSize: '1rem',
              label: 'Comments',
              formatter: function (w) {
                return '80%';
              }
            }
          }
        }
      },
      legend: {
        show: true,
        position: 'bottom'
      },
      stroke: {
        lineCap: 'round'
      }
    };

    // Apex Radar Chart
    this.apexRadarChart = {
      series: [
        {
          name: 'iPhone 11',
          data: [41, 64, 81, 60, 42, 42, 33, 23]
        },
        {
          name: 'Samsung s20',
          data: [65, 46, 42, 25, 58, 63, 76, 43]
        }
      ],
      fill: {
        opacity: [1, 0.8]
      },
      stroke: {
        show: false,
        width: 0
      },
      markers: {
        size: 0
      },
      grid: {
        show: false
      },
      colors: [this.chartColors.donut.series1, this.chartColors.donut.series3],
      chart: {
        height: 400,
        type: 'radar',
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: false,
          blur: 8,
          left: 1,
          top: 1,
          opacity: 0.2
        }
      },
      legend: {
        show: true,
        position: 'bottom'
      },

      xaxis: {
        categories: ['Battery', 'Brand', 'Camera', 'Memory', 'Storage', 'Display', 'OS', 'Price']
      }
    };
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    // content header
    this.contentHeader = {
      headerTitle: 'Apex Charts',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Table',
            isLink: true,
            link: '/'
          },
          {
            name: 'Apex Charts',
            isLink: false
          }
        ]
      }
    };
  }

  /**
   * After View Init
   */
  ngAfterViewInit() {
    // Subscribe to core config changes
    this._coreConfigService.getConfig().subscribe(config => {
      // If Menu Collapsed Changes
      if (config.layout.menu.collapsed === true || config.layout.menu.collapsed === false) {
        setTimeout(() => {
          // Get Dynamic Width for Charts
          this.isMenuToggled = true;
          this.apexLineAreaChart.chart.width = this.apexLineAreaChartRef?.nativeElement.offsetWidth;
          this.apexLineChart.chart.width = this.apexLineChartRef?.nativeElement.offsetWidth;
          this.apexColumnChart.chart.width = this.apexColumnChartRef?.nativeElement.offsetWidth;
          this.apexBarChart.chart.width = this.apexBarChartRef?.nativeElement.offsetWidth;
          this.apexScatterChart.chart.width = this.apexScatterChartRef?.nativeElement.offsetWidth;
          this.apexCandlestickChart.chart.width = this.apexCandlestickChartRef?.nativeElement.offsetWidth;
          this.apexHeatmapChart.chart.width = this.apexHeatmapChartRef?.nativeElement.offsetWidth;
          this.apexRadarChart.chart.width = this.apexRadarChartRef?.nativeElement.offsetWidth;
          this.apexDonutChart.chart.width = this.apexDonutChartRef?.nativeElement.offsetWidth;
          this.apexRadialChart.chart.width = this.apexRadialChartRef?.nativeElement.offsetWidth;
        }, 900);
      }
    });
  }
}
