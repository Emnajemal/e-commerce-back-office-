import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

import { NgbDateStruct, NgbCalendar, NgbDate, NgbDateParserFormatter, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

import * as snippet from 'app/main/forms/form-elements/date-time-picker/date-time-picker.snippetcode';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DateTimePickerComponent implements OnInit {
  // public
  public contentHeader: object;

  public _snippetCodeBasicDP = snippet.snippetCodeBasicDP;
  public _snippetCodeDisabledDP = snippet.snippetCodeDisabledDP;
  public _snippetCodeMinMaxDP = snippet.snippetCodeMinMaxDP;
  public _snippetCodeCustomFooterDP = snippet.snippetCodeCustomFooterDP;
  public _snippetCodeI18n = snippet.snippetCodeI18n;
  public _snippetCodeCustomDay = snippet.snippetCodeCustomDay;
  public _snippetCodeRangeSelectionDP = snippet.snippetCodeRangeSelectionDP;
  public _snippetCodeBasicTP = snippet.snippetCodeBasicTP;
  public _snippetCodeMeridianTP = snippet.snippetCodeMeridianTP;
  public _snippetCodeCustomTP = snippet.snippetCodeCustomTP;
  public _snippetCodeSpinnerTP = snippet.snippetCodeSpinnerTP;
  public _snippetCodeCustomValidationTP = snippet.snippetCodeCustomValidationTP;
  public _snippetCodei18nTP = snippet.snippetCodei18nTP;

  // Basic Date Picker
  public basicDPdata: NgbDateStruct;

  // Disabled Date Picker
  public disabled = true;

  // Min-Max Date Picker
  public MinMaxDPdata: NgbDateStruct;

  // Custom Footer Date Picker
  public customFooterDPdata: NgbDateStruct;

  // Custom Day Date Picker
  public CustomDayDPdata: NgbDateStruct;
  public today = this.calendar.getToday();

  // Range selection Date Picker
  public hoveredDate: NgbDate | null = null;
  public fromDate: NgbDate | null;
  public toDate: NgbDate | null;

  // Basic Time Picker
  public basicTP = { hour: 13, minute: 30 };

  // Meridian Time Picker
  public meridianTPdata = { hour: 13, minute: 30 };
  public meridianTP = true;

  // Custom Time Picker
  public customTPtime: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  public customTPseconds = true;

  // Spinner Time Picker
  public spinnerTPtime = { hour: 13, minute: 30 };
  public spinnerTP = true;

  // Custom Validation Time Picker
  public customValidationTP = new FormControl('', (control: FormControl) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (value.hour < 12) {
      return { tooEarly: true };
    }
    if (value.hour > 13) {
      return { tooLate: true };
    }

    return null;
  });

  /**
   * Constructor
   *
   * @param {NgbCalendar} calendar
   * @param {NgbDateParserFormatter} formatter
   */
  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  /**
   * Range selection Date Picker
   *
   * @param date
   */
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  /**
   * Is Hovered
   *
   * @param date
   */
  isHovered(date: NgbDate) {
    return (
      this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
    );
  }

  /**
   * Is Inside
   *
   * @param date
   */
  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  /**
   *  Is Range
   *
   * @param date
   */
  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  /**
   * Custom Day Date Picker
   *
   * @param date
   * @param current
   */
  isDisabled = (date: NgbDate, current: { month: number; year: number }) => date.month !== current.month;

  isWeekend = (date: NgbDate) => this.calendar.getWeekday(date) >= 6;

  /**
   * Meridian Time Picker
   */
  meridianTPtoggle() {
    this.meridianTP = !this.meridianTP;
  }

  /**
   * Custom Time Picker
   */
  customTPtoggleSeconds() {
    this.customTPseconds = !this.customTPseconds;
  }

  /**
   * Spinner Time Picker
   */
  spinnerTPtoggle() {
    this.spinnerTP = !this.spinnerTP;
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    // content header
    this.contentHeader = {
      headerTitle: 'Date & Time Picker',
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
            name: 'Form Elements',
            isLink: true,
            link: '/'
          },
          {
            name: 'Date & Time Picker',
            isLink: false
          }
        ]
      }
    };
  }
}
