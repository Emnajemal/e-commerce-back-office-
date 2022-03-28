import { Injectable } from '@angular/core';

import { NgbTimepickerI18n } from '@ng-bootstrap/ng-bootstrap';

const I18N_VALUES = {
  el: { periods: ['πμ', 'μμ'] }
  // other languages you would support
};

// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
@Injectable()
export class I18n {
  language = 'el';
}

// Define custom service providing the "AM" and "PM" translations.
@Injectable()
export class CustomTimepickerI18n extends NgbTimepickerI18n {
  constructor(private _i18n: I18n) {
    super();
  }

  getMorningPeriod(): string {
    return I18N_VALUES[this._i18n.language].periods[0];
  }

  getAfternoonPeriod(): string {
    return I18N_VALUES[this._i18n.language].periods[1];
  }
}
