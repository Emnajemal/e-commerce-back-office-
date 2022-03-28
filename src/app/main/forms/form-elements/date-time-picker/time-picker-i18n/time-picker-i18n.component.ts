import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'time-picker-i18n',
  templateUrl: './time-picker-i18n.component.html'
})
export class TimePickerI18nComponent implements OnInit {
  model = { hour: 13, minute: 30 };

  constructor() {}

  ngOnInit(): void {}
}
