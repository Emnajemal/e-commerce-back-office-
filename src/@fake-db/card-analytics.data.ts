export class CardAnalyticsData {
  public static data = {
    supportTracker: {
      series: [83],
      analyticsData: {
        tickets: 163,
        newTickets: 29,
        openTickets: 63,
        responseTime: '1d'
      }
    },
    avgSessions: {
      series: [
        {
          name: 'Sessions',
          data: [75, 125, 225, 175, 125, 75, 25]
        }
      ],
      analyticsData: {
        avgSessions: '2.7K',
        vsLastSevenDays: '+5.2%',
        goal: '$100000',
        goalProgressbar: 50,
        retention: '90%',
        retentionProgressbar: 60,
        users: '100K',
        usersProgressbar: 70,
        duration: '1yr',
        durationProgressbar: 90
      }
    },
    revenueReport: {
      earningExpenseChart: {
        series: [
          {
            name: 'Earning',
            data: [95, 177, 284, 256, 105, 63, 168, 218, 72]
          },
          {
            name: 'Expense',
            data: [-145, -80, -60, -180, -100, -60, -85, -75, -100]
          }
        ]
      },
      budgetChart: {
        series: [
          {
            data: [61, 48, 69, 52, 60, 40, 79, 60, 59, 43, 62]
          },
          {
            data: [20, 10, 30, 15, 23, 0, 25, 15, 20, 5, 27]
          }
        ]
      },
      analyticsData: {
        currentBudget: '$25,852',
        totalBudget: '56,800'
      }
    },
    goalOverview: {
      series: [83],
      analyticsData: {
        completed: '786,617',
        inProgress: '13,561'
      }
    },
    revenue: {
      series: [
        {
          name: 'This Month',
          data: [45000, 47000, 44800, 47500, 45500, 48000, 46500, 48600]
        },
        {
          name: 'Last Month',
          data: [46000, 48000, 45500, 46600, 44500, 46500, 45000, 47000]
        }
      ],
      analyticsData: {
        thisMonth: '86,589',
        lastMonth: '73,683'
      }
    },
    salesLastSixMonths: {
      series: [
        {
          name: 'Sales',
          data: [90, 50, 86, 40, 100, 20]
        },
        {
          name: 'Visit',
          data: [70, 75, 70, 76, 20, 85]
        }
      ]
    },
    sales: {
      series: [
        {
          name: 'Sales',
          data: [140, 180, 150, 205, 160, 295, 125, 255, 205, 305, 240, 295]
        }
      ],
      analyticsData: {
        totalSales: '12.84k'
      }
    },
    productOrders: {
      series: [70, 52, 26],
      analyticsData: {
        finished: 23043,
        pending: 14658,
        rejected: 4758
      }
    },
    sessionsByDevice: {
      series: [58.6, 34.9, 6.5],
      analyticsData: {
        desktop: {
          desktopPercentage: '58.6%',
          changePercentage: '2%'
        },
        mobile: {
          mobilePercentage: '34.9%',
          changePercentage: '8%'
        },
        tablet: {
          tabletPercentage: '6.5%',
          changePercentage: '-5%'
        }
      }
    },
    customers: {
      series: [690, 258, 149],
      analyticsData: {
        new: 690,
        returning: 258,
        referrals: 149
      }
    },
    earnings: {
      series: [53, 16, 31]
    }
  };
}
