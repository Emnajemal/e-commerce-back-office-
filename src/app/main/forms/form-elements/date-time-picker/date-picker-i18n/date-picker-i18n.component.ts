import { Component, OnInit } from '@angular/core';

import { NgbDateStruct, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

import {
  I18n,
  CustomDatepickerI18n
} from 'app/main/forms/form-elements/date-time-picker/date-picker-i18n/date-picker-i18n.service';

@Component({
  selector: 'date-picker-i18n',
  templateUrl: './date-picker-i18n.component.html',
  providers: [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }] // define custom NgbDatepickerI18n provider
})
export class DatePickerI18nComponent implements OnInit {
  public i18nDPdata: NgbDateStruct;

  constructor() {}

  ngOnInit() {}
}
