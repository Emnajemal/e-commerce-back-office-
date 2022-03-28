export class CalendarFakeData {
  public static events = [
    {
      id: 1,
      url: '',
      title: 'Design Review',
      start: new Date(),
      end: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
      allDay: false,
      calendar: 'Business',
      extendedProps: {}
    },
    {
      id: 2,
      url: '',
      title: 'Meeting With Client',
      start: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -11),
      end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -10),
      allDay: true,
      calendar: 'Business',
      extendedProps: {}
    },
    {
      id: 3,
      url: '',
      title: 'Family Trip',
      allDay: true,
      start: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -9),
      end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -7),
      calendar: 'Holiday',
      extendedProps: {}
    },
    {
      id: 4,
      url: 'https://www.pixinvent.com',
      title: 'URL event',
      start: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -11),
      end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -10),
      allDay: true,
      calendar: 'Personal',
      extendedProps: {}
    },
    {
      id: 5,
      url: '',
      title: 'Dart Game?',
      start: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -13),
      end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -12),
      allDay: true,
      calendar: 'ETC',
      extendedProps: {
        location: 'Chicago',
        description: 'on a Trip',
        addGuest: []
      }
    },
    {
      id: 6,
      url: '',
      title: 'Meditation',
      start: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -13),
      end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -12),
      allDay: true,
      calendar: 'Personal',
      extendedProps: {}
    },
    {
      id: 7,
      url: '',
      title: 'Dinner',
      start: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -13),
      end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -12),
      allDay: true,
      calendar: 'Family',
      extendedProps: {
        location: 'Moscow',
        description: 'The party club'
      }
    },
    {
      id: 8,
      url: '',
      title: 'Product Review',
      start: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -13),
      end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, -12),
      allDay: true,
      calendar: 'Business',
      extendedProps: {
        location: 'Japan',
        description: 'weekend Drive'
      }
    },
    {
      id: 9,
      url: '',
      title: 'Monthly Meeting',
      start:
        new Date().getMonth() === 11
          ? new Date(new Date().getFullYear() + 1, 0, 1)
          : new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),
      end:
        new Date().getMonth() === 11
          ? new Date(new Date().getFullYear() + 1, 0, 1)
          : new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),
      allDay: true,
      calendar: 'Business',
      extendedProps: {}
    },
    {
      id: 10,
      url: '',
      title: 'Monthly Checkup',
      start:
        new Date().getMonth() === 11
          ? new Date(new Date().getFullYear() - 1, 0, 1)
          : new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
      end:
        new Date().getMonth() === 11
          ? new Date(new Date().getFullYear() - 1, 0, 1)
          : new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
      allDay: true,
      calendar: 'Personal',
      extendedProps: {}
    }
  ];
  public static calendar = [
    { id: 1, filter: 'Business', color: 'primary', checked: true },
    { id: 2, filter: 'Holiday', color: 'success', checked: true },
    { id: 3, filter: 'Personal', color: 'danger', checked: true },
    { id: 4, filter: 'Family', color: 'warning', checked: true },
    { id: 5, filter: 'ETC', color: 'info', checked: true }
  ];
}
