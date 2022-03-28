import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { colors } from 'app/colors.const';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChartjsComponent implements OnInit {
  // public
  public contentHeader: object;
  public radioModel = 1;

  // Color Variables
  private primaryColorShade = '#836AF9';
  private yellowColor = '#ffe800';
  private successColorShade = '#28dac6';
  private warningColorShade = '#ffe802';
  private warningLightColor = '#FDAC34';
  private infoColorShade = '#299AFF';
  private greyColor = '#4F5D70';
  private blueColor = '#2c9aff';
  private blueLightColor = '#84D0FF';
  private greyLightColor = '#EDF1F4';
  private tooltipShadow = 'rgba(0, 0, 0, 0.25)';
  private lineChartPrimary = '#666ee8';
  private lineChartDanger = '#ff4961';
  private labelColor = '#6e6b7b';
  private grid_line_color = 'rgba(200, 200, 200, 0.2)'; // RGBA color helps in dark layout

  // ng2-flatpickr options
  public DateRangeOptions = {
    altInput: true,
    mode: 'range',
    altInputClass: 'form-control flat-picker bg-transparent border-0 shadow-none flatpickr-input',
    defaultDate: ['2019-05-01', '2019-05-10'],
    altFormat: 'Y-n-j'
  };

  // Bar Chart
  public barChart = {
    chartType: 'bar',
    datasets: [
      {
        data: [275, 90, 190, 205, 125, 85, 55, 87, 127, 150, 230, 280, 190],
        backgroundColor: this.successColorShade,
        borderColor: 'transparent',
        hoverBackgroundColor: this.successColorShade,
        hoverBorderColor: this.successColorShade
      }
    ],
    labels: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12'],
    options: {
      elements: {
        rectangle: {
          borderWidth: 2,
          borderSkipped: 'bottom'
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        display: false
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: this.tooltipShadow,
        backgroundColor: colors.solid.white,
        titleFontColor: colors.solid.black,
        bodyFontColor: colors.solid.black
      },
      scales: {
        xAxes: [
          {
            barThickness: 15,
            display: true,
            gridLines: {
              display: true,
              color: this.grid_line_color,
              zeroLineColor: this.grid_line_color
            },
            scaleLabel: {
              display: true
            },
            ticks: {
              fontColor: this.labelColor
            }
          }
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: this.grid_line_color,
              zeroLineColor: this.grid_line_color
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 400,
              fontColor: this.labelColor
            }
          }
        ]
      }
    },
    legend: false
  };

  // Horizontal Bar Chart
  public horiBarChart = {
    chartType: 'horizontalBar',

    options: {
      elements: {
        rectangle: {
          borderWidth: 2,
          borderSkipped: 'right'
        }
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: this.tooltipShadow,
        backgroundColor: colors.solid.white,
        titleFontColor: colors.solid.black,
        bodyFontColor: colors.solid.black
      },
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              zeroLineColor: this.grid_line_color,
              borderColor: 'transparent',
              color: this.grid_line_color,
              drawTicks: false
            },
            scaleLabel: {
              display: true
            },
            ticks: {
              min: 0
            }
          }
        ],
        yAxes: [
          {
            display: true,
            barThickness: 15,
            gridLines: {
              display: false
            },
            scaleLabel: {
              display: true
            }
          }
        ]
      }
    },

    labels: ['MON', 'TUE', 'WED ', 'THU', 'FRI', 'SAT', 'SUN'],
    datasets: [
      {
        data: [710, 350, 470, 580, 230, 460, 120],
        backgroundColor: colors.solid.info,
        borderColor: 'transparent',
        hoverBackgroundColor: colors.solid.info,
        hoverBorderColor: colors.solid.info,
        borderWidth: 42,
        radius: 12,
        pointRadius: 12,
        hoverBorderWidth: 12
      }
    ],

    legend: false
  };

  // line chart
  public lineChart = {
    chartType: 'line',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      backgroundColor: false,
      hover: {
        mode: 'label'
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: this.tooltipShadow,
        backgroundColor: colors.solid.white,
        titleFontColor: colors.solid.black,
        bodyFontColor: colors.solid.black
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            },
            gridLines: {
              display: true,
              color: this.grid_line_color,
              zeroLineColor: this.grid_line_color
            },
            ticks: {
              fontColor: this.labelColor
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 400,
              fontColor: this.labelColor
            },
            gridLines: {
              display: true,
              color: this.grid_line_color,
              zeroLineColor: this.grid_line_color
            }
          }
        ]
      },
      layout: {
        padding: {
          top: -15,
          bottom: -25,
          left: -15
        }
      },
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 9
        }
      }
    },

    labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
    datasets: [
      {
        data: [80, 150, 180, 270, 210, 160, 160, 202, 265, 210, 270, 255, 290, 360, 375],
        label: 'Europe',
        borderColor: this.lineChartDanger,
        lineTension: 0.5,
        pointStyle: 'circle',
        backgroundColor: this.lineChartDanger,
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBorderColor: colors.solid.white,
        pointHoverBackgroundColor: this.lineChartDanger,
        pointShadowOffsetX: 1,
        pointShadowOffsetY: 1,
        pointShadowBlur: 5,
        pointShadowColor: this.tooltipShadow
      },
      {
        data: [80, 125, 105, 130, 215, 195, 140, 160, 230, 300, 220, 170, 210, 200, 280],
        label: 'Asia',
        borderColor: this.lineChartPrimary,
        lineTension: 0.5,
        pointStyle: 'circle',
        backgroundColor: this.lineChartPrimary,
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBorderColor: colors.solid.white,
        pointHoverBackgroundColor: this.lineChartPrimary,
        pointShadowOffsetX: 1,
        pointShadowOffsetY: 1,
        pointShadowBlur: 5,
        pointShadowColor: this.tooltipShadow
      },
      {
        data: [80, 99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180],
        label: 'Africa',
        borderColor: this.warningColorShade,
        lineTension: 0.5,
        pointStyle: 'circle',
        backgroundColor: this.warningColorShade,
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBorderColor: colors.solid.white,
        pointHoverBackgroundColor: this.warningColorShade,
        pointShadowOffsetX: 1,
        pointShadowOffsetY: 1,
        pointShadowBlur: 5,
        pointShadowColor: this.tooltipShadow
      }
    ]
  };

  // radar Chart
  public radarChart = {
    chartType: 'radar',

    labels: ['STA', 'STR', 'AGI', 'VIT', 'CHA', 'INT'],
    datasets: [
      {
        label: 'Donté Panlin',
        data: [25, 59, 90, 81, 60, 82],
        fill: true,
        backgroundColor: 'rgba(255,161,161, 0.9)',
        borderColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent'
      },
      {
        label: 'Mireska Sunbreeze',
        data: [40, 100, 40, 90, 40, 90],
        fill: true,
        backgroundColor: 'rgba(155,136,250, 0.9)',
        borderColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent'
      }
    ],

    options: {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        position: 'top',
        labels: {
          padding: 25
        }
      },
      layout: {
        padding: {
          top: -20
        }
      },
      tooltips: {
        enabled: false,
        custom: function (tooltip) {
          var tooltipEl = document.getElementById('tooltip');
          if (tooltip.body) {
            tooltipEl.style.display = 'block';
            if (tooltip.body[0].lines && tooltip.body[0].lines[0]) {
              tooltipEl.innerHTML = tooltip.body[0].lines[0];
            }
          } else {
            setTimeout(function () {
              tooltipEl.style.display = 'none';
            }, 500);
          }
        }
      },
      gridLines: {
        display: false
      },
      scale: {
        ticks: {
          maxTicksLimit: 1,
          display: false
        },
        gridLines: {
          color: this.grid_line_color
        },
        angleLines: { color: this.grid_line_color }
      }
    }
  };

  // polar Area Chart
  public polarAreaChart = {
    chartType: 'polarArea',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 10
        }
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: this.tooltipShadow,
        backgroundColor: colors.solid.white,
        titleFontColor: colors.solid.black,
        bodyFontColor: colors.solid.black
      },
      scale: {
        scaleShowLine: true,
        scaleLineWidth: 1,
        ticks: {
          display: false
        },
        reverse: false,
        gridLines: {
          display: false
        }
      },
      animation: {
        animateRotate: false
      }
    },

    labels: ['Africa', 'Asia', 'Europe', 'America', 'Antarctica', 'Australia'],
    datasets: [
      {
        label: 'Population (millions)',
        backgroundColor: [
          this.primaryColorShade,
          this.warningColorShade,
          colors.solid.primary,
          this.infoColorShade,
          this.greyColor,
          this.successColorShade
        ],
        data: [19, 17.5, 15, 13.5, 11, 9],
        borderWidth: 0
      }
    ]
  };

  // bubble Chart
  public bubbleChart = {
    chartType: 'bubble',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              color: this.grid_line_color,
              zeroLineColor: this.grid_line_color
            },
            ticks: {
              stepSize: 10,
              min: 0,
              max: 140
            }
          }
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: this.grid_line_color,
              zeroLineColor: this.grid_line_color
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 400
            }
          }
        ]
      },
      legend: {
        display: false
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: this.tooltipShadow,
        backgroundColor: colors.solid.white,
        titleFontColor: colors.solid.black,
        bodyFontColor: colors.solid.black
      }
    },

    datasets: [
      {
        backgroundColor: this.primaryColorShade,
        borderColor: this.primaryColorShade,
        data: [
          {
            x: 20,
            y: 74,
            r: 10
          }
        ]
      },
      {
        backgroundColor: this.warningColorShade,
        borderColor: this.warningColorShade,
        data: [
          {
            x: 30,
            y: 72,
            r: 5
          }
        ]
      },
      {
        backgroundColor: this.primaryColorShade,
        borderColor: this.primaryColorShade,
        data: [
          {
            x: 10,
            y: 110,
            r: 5
          }
        ]
      },
      {
        backgroundColor: this.warningColorShade,
        borderColor: this.warningColorShade,
        data: [
          {
            x: 40,
            y: 110,
            r: 7
          }
        ]
      },
      {
        backgroundColor: this.warningColorShade,
        borderColor: this.warningColorShade,
        data: [
          {
            x: 20,
            y: 135,
            r: 6
          }
        ]
      },
      {
        backgroundColor: this.warningColorShade,
        borderColor: this.warningColorShade,
        data: [
          {
            x: 10,
            y: 160,
            r: 12
          }
        ]
      },
      {
        backgroundColor: this.primaryColorShade,
        borderColor: this.primaryColorShade,
        data: [
          {
            x: 30,
            y: 165,
            r: 7
          }
        ]
      },
      {
        backgroundColor: this.primaryColorShade,
        borderColor: this.primaryColorShade,
        data: [
          {
            x: 40,
            y: 200,
            r: 20
          }
        ]
      },
      {
        backgroundColor: this.primaryColorShade,
        borderColor: this.primaryColorShade,
        data: [
          {
            x: 90,
            y: 185,
            r: 7
          }
        ]
      },
      {
        backgroundColor: this.primaryColorShade,
        borderColor: this.primaryColorShade,
        data: [
          {
            x: 50,
            y: 240,
            r: 7
          }
        ]
      },
      {
        backgroundColor: this.primaryColorShade,
        borderColor: this.primaryColorShade,
        data: [
          {
            x: 60,
            y: 275,
            r: 10
          }
        ]
      },
      {
        backgroundColor: this.primaryColorShade,
        borderColor: this.primaryColorShade,
        data: [
          {
            x: 70,
            y: 305,
            r: 5
          }
        ]
      },
      {
        backgroundColor: this.primaryColorShade,
        borderColor: this.primaryColorShade,
        data: [
          {
            x: 80,
            y: 325,
            r: 4
          }
        ]
      },
      {
        backgroundColor: this.warningColorShade,
        borderColor: this.warningColorShade,
        data: [
          {
            x: 50,
            y: 285,
            r: 5
          }
        ]
      },
      {
        backgroundColor: this.warningColorShade,
        borderColor: this.warningColorShade,
        data: [
          {
            x: 60,
            y: 235,
            r: 5
          }
        ]
      },
      {
        backgroundColor: this.warningColorShade,
        borderColor: this.warningColorShade,
        data: [
          {
            x: 70,
            y: 275,
            r: 7
          }
        ]
      },
      {
        backgroundColor: this.warningColorShade,
        borderColor: this.warningColorShade,
        data: [
          {
            x: 80,
            y: 290,
            r: 4
          }
        ]
      },
      {
        backgroundColor: this.warningColorShade,
        borderColor: this.warningColorShade,
        data: [
          {
            x: 90,
            y: 250,
            r: 10
          }
        ]
      },
      {
        backgroundColor: this.warningColorShade,
        borderColor: this.warningColorShade,
        data: [
          {
            x: 100,
            y: 220,
            r: 7
          }
        ]
      },
      {
        backgroundColor: this.warningColorShade,
        borderColor: this.warningColorShade,
        data: [
          {
            x: 120,
            y: 230,
            r: 4
          }
        ]
      },
      {
        backgroundColor: this.warningColorShade,
        borderColor: this.warningColorShade,
        data: [
          {
            x: 110,
            y: 320,
            r: 15
          }
        ]
      },
      {
        backgroundColor: this.warningColorShade,
        borderColor: this.warningColorShade,
        data: [
          {
            x: 130,
            y: 330,
            r: 7
          }
        ]
      },
      {
        backgroundColor: this.primaryColorShade,
        borderColor: this.primaryColorShade,
        data: [
          {
            x: 100,
            y: 310,
            r: 5
          }
        ]
      },
      {
        backgroundColor: this.primaryColorShade,
        borderColor: this.primaryColorShade,
        data: [
          {
            x: 110,
            y: 240,
            r: 5
          }
        ]
      },
      {
        backgroundColor: this.primaryColorShade,
        borderColor: this.primaryColorShade,
        data: [
          {
            x: 120,
            y: 270,
            r: 7
          }
        ]
      },
      {
        backgroundColor: this.primaryColorShade,
        borderColor: this.primaryColorShade,
        data: [
          {
            x: 130,
            y: 300,
            r: 6
          }
        ]
      }
    ]
  };

  // doughnut Chart
  public doughnutChart = {
    chartType: 'doughnut',
    options: {
      responsive: false,
      responsiveAnimationDuration: 500,
      cutoutPercentage: 60,
      aspectRatio: 1.4,
      legend: { display: false },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            var label = data.datasets[0].labels[tooltipItem.index] || '',
              value = data.datasets[0].data[tooltipItem.index];
            var output = ' ' + label + ' : ' + value + ' %';
            return output;
          }
        },
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: this.tooltipShadow,
        backgroundColor: colors.solid.white,
        titleFontColor: colors.solid.black,
        bodyFontColor: colors.solid.black
      }
    },

    datasets: [
      {
        labels: ['Tablet', 'Mobile', 'Desktop'],
        data: [10, 10, 80],
        backgroundColor: [this.successColorShade, this.warningLightColor, colors.solid.primary],
        borderWidth: 0,
        pointStyle: 'rectRounded'
      }
    ]
  };

  // scatter Chart
  public scatterChart = {
    chartType: 'scatter',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 800,
      title: {
        display: false,
        text: 'Chart.js Scatter Chart'
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: this.tooltipShadow,
        backgroundColor: colors.solid.white,
        titleFontColor: colors.solid.black,
        bodyFontColor: colors.solid.black
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: this.grid_line_color,
              zeroLineColor: this.grid_line_color
            },
            ticks: {
              stepSize: 10,
              min: 0,
              max: 140
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              color: this.grid_line_color,
              zeroLineColor: this.grid_line_color
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 400
            }
          }
        ]
      },
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 9
        }
      }
    },

    datasets: [
      {
        label: 'iPhone',
        data: [
          {
            x: 72,
            y: 225
          },
          {
            x: 81,
            y: 270
          },
          {
            x: 90,
            y: 230
          },
          {
            x: 103,
            y: 305
          },
          {
            x: 103,
            y: 245
          },
          {
            x: 108,
            y: 275
          },
          {
            x: 110,
            y: 290
          },
          {
            x: 111,
            y: 315
          },
          {
            x: 109,
            y: 350
          },
          {
            x: 116,
            y: 340
          },
          {
            x: 113,
            y: 260
          },
          {
            x: 117,
            y: 275
          },
          {
            x: 117,
            y: 295
          },
          {
            x: 126,
            y: 280
          },
          {
            x: 127,
            y: 340
          },
          {
            x: 133,
            y: 330
          }
        ],
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: colors.solid.primary,
        pointHoverBackgroundColor: colors.solid.primary,
        pointHoverBorderColor: colors.solid.primary
      },
      {
        label: 'Samsung Note',
        data: [
          {
            x: 13,
            y: 95
          },
          {
            x: 22,
            y: 105
          },
          {
            x: 17,
            y: 115
          },
          {
            x: 19,
            y: 130
          },
          {
            x: 21,
            y: 125
          },
          {
            x: 35,
            y: 125
          },
          {
            x: 13,
            y: 155
          },
          {
            x: 21,
            y: 165
          },
          {
            x: 25,
            y: 155
          },
          {
            x: 18,
            y: 190
          },
          {
            x: 26,
            y: 180
          },
          {
            x: 43,
            y: 180
          },
          {
            x: 53,
            y: 202
          },
          {
            x: 61,
            y: 165
          },
          {
            x: 67,
            y: 225
          }
        ],
        pointBackgroundColor: this.yellowColor,
        borderColor: 'transparent',
        pointRadius: 5,
        pointHoverBackgroundColor: this.yellowColor,
        pointHoverBorderColor: this.yellowColor
      },
      {
        label: 'OnePlus',
        data: [
          {
            x: 70,
            y: 195
          },
          {
            x: 72,
            y: 270
          },
          {
            x: 98,
            y: 255
          },
          {
            x: 100,
            y: 215
          },
          {
            x: 87,
            y: 240
          },
          {
            x: 94,
            y: 280
          },
          {
            x: 99,
            y: 300
          },
          {
            x: 102,
            y: 290
          },
          {
            x: 110,
            y: 275
          },
          {
            x: 111,
            y: 250
          },
          {
            x: 94,
            y: 280
          },
          {
            x: 92,
            y: 340
          },
          {
            x: 100,
            y: 335
          },
          {
            x: 108,
            y: 330
          }
        ],
        pointBackgroundColor: this.successColorShade,
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHoverBackgroundColor: this.successColorShade,
        pointHoverBorderColor: this.successColorShade
      }
    ]
  };

  // lineArea Chart
  public lineAreaChart = {
    chartType: 'line',

    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 9
        }
      },
      layout: {
        padding: {
          top: -20,
          bottom: -20,
          left: -20
        }
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: this.tooltipShadow,
        backgroundColor: colors.solid.white,
        titleFontColor: colors.solid.black,
        bodyFontColor: colors.solid.black
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: this.grid_line_color
            },
            scaleLabel: {
              display: true
            },
            ticks: {
              fontColor: this.labelColor
            }
          }
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: this.grid_line_color
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 400,
              fontColor: this.labelColor
            },
            scaleLabel: {
              display: true
            }
          }
        ]
      }
    },
    labels: [
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
      ''
    ],
    datasets: [
      {
        label: 'Africa',
        data: [40, 55, 45, 75, 65, 55, 70, 60, 100, 98, 90, 120, 125, 140, 155],
        lineTension: 0,
        backgroundColor: this.blueColor,
        pointStyle: 'circle',
        borderColor: 'transparent',
        pointRadius: 0.5,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: this.blueColor,
        pointHoverBorderColor: colors.solid.white
      },
      {
        label: 'Asia',
        data: [70, 85, 75, 150, 100, 140, 110, 105, 160, 150, 125, 190, 200, 240, 275],
        lineTension: 0,
        backgroundColor: this.blueLightColor,
        pointStyle: 'circle',
        borderColor: 'transparent',
        pointRadius: 0.5,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: this.blueLightColor,
        pointHoverBorderColor: colors.solid.white
      },
      {
        label: 'Europe',
        data: [240, 195, 160, 215, 185, 215, 185, 200, 250, 210, 195, 250, 235, 300, 315],
        lineTension: 0,
        backgroundColor: this.greyLightColor,
        pointStyle: 'circle',
        borderColor: 'transparent',
        pointRadius: 0.5,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: this.greyLightColor,
        pointHoverBorderColor: colors.solid.white
      }
    ]
  };

  //** To add spacing between legends and chart
  public plugins = [
    {
      beforeInit(chart) {
        chart.legend.afterFit = function () {
          this.height += 20;
        };
      }
    }
  ];

  /**
   *
   */
  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'Chartjs',
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
            name: 'Charts & Maps',
            isLink: true,
            link: '/'
          },
          {
            name: 'Chartjs',
            isLink: false
          }
        ]
      }
    };
  }
}
