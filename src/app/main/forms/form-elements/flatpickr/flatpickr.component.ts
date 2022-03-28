import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FlatpickrOptions } from 'ng2-flatpickr';

import {
  basicDateSnippetCode,
  dateTimeSnippetCode,
  DefaultDateSnippetCode,
  DateRangeSnippetCode,
  timeSnippetCode,
  customDateSnippetCode,
  multipleDateSnippetCode
} from 'app/main/forms/form-elements/flatpickr/flatpickr.snippetcode';

@Component({
  selector: 'app-flatpickr',
  templateUrl: './flatpickr.component.html',
  styleUrls: ['./flatpickr.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlatpickrComponent implements OnInit {
  // public
  public contentHeader: object;

  public basicDateOptions: FlatpickrOptions = {
    altInput: true
  };

  public dateTimeOptions: FlatpickrOptions = {
    altInput: true,
    enableTime: true
  };

  public DefaultDateOptions: FlatpickrOptions = {
    defaultDate: '2019-03-19',
    altInput: true
  };

  public DateRangeOptions: FlatpickrOptions = {
    altInput: true,
    mode: 'range'
  };

  public timeOptions: FlatpickrOptions = {
    enableTime: true,
    noCalendar: true,
    altInput: true
  };

  public customDateOptions: FlatpickrOptions = {
    altFormat: 'j-m-Y',
    altInput: true
  };

  public multipleDateOptions: FlatpickrOptions = {
    altInput: true,
    mode: 'multiple'
  };

  // snippet code variables
  public _basicDateSnippetCode = basicDateSnippetCode;
  public _dateTimeSnippetCode = dateTimeSnippetCode;
  public _DefaultDateSnippetCode = DefaultDateSnippetCode;
  public _DateRangeSnippetCode = DateRangeSnippetCode;
  public _timeSnippetCode = timeSnippetCode;
  public _customDateSnippetCode = customDateSnippetCode;
  public _multipleDateSnippetCode = multipleDateSnippetCode;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'Flatpickr',
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
            name: 'Extensions',
            isLink: true,
            link: '/'
          },
          {
            name: 'Flatpickr',
            isLink: false
          }
        ]
      }
    };
  }
}
