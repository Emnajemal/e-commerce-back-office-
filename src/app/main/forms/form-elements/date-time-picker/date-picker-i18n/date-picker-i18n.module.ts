import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreCommonModule } from '@core/common.module';

import { DatePickerI18nComponent } from 'app/main/forms/form-elements/date-time-picker/date-picker-i18n/date-picker-i18n.component';

@NgModule({
  declarations: [DatePickerI18nComponent],
  imports: [CommonModule, CoreCommonModule, NgbModule, FormsModule],
  exports: [DatePickerI18nComponent]
})
export class DatePickerI18nModule {}
