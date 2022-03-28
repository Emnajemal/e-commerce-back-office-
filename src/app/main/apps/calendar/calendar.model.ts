export class EventRef {
  id? = undefined;
  url: string;
  title: string = '';
  start: string;
  end: string;
  allDay = false;
  calendar: '';
  extendedProps = {
    location: '',
    description: '',
    addGuest: []
  };
}
