import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeBasicDP: snippetCode = {
  html: `
  <!-- Basic Date Picker -->
  <form class="form-inline">
    <div class="form-group">
      <div class="input-group">
        <input class="form-control" placeholder="yyyy-mm-dd" name="Basic Date Picker" [(ngModel)]="basicDPdata"
          ngbDatepicker #basicDP="ngbDatepicker">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary feather icon-calendar" (click)="basicDP.toggle()"
            type="button" rippleEffect></button>
        </div>
      </div>
    </div>
  </form>
  <pre class="mt-2 p-1">Model: {{ basicDPdata | json }}</pre>
  <!--/ Basic Date Picker -->
  `,
  ts: `
  public basicDPdata: NgbDateStruct;

  `
};
export const snippetCodeDisabledDP: snippetCode = {
  html: `
  <!-- Disabled Date Picker -->
  <form class="form-inline">
    <div class="form-group">
      <div class="input-group">
        <input class="form-control" placeholder="yyyy-mm-dd" name="Disabled Date Picker" ngbDatepicker
          #disabledDP="ngbDatepicker" [disabled]="disabled">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary feather icon-calendar" (click)="disabledDP.toggle()"
            type="button" rippleEffect></button>
        </div>
      </div>
    </div>
  </form>
  <button class="btn btn-sm btn-outline-{{disabled ? 'danger' : 'success'}} my-1" (click)="disabled = !disabled" rippleEffect>
    {{ disabled ? "D I S A B L E D" : "E N A B L E D"}}
  </button>
  <!--/ Disabled Date Picker -->
  `,
  ts: `
  public disabled = true;

  `
};
export const snippetCodeMinMaxDP: snippetCode = {
  html: `
  <!-- Min-Max Date Picker -->
  <form class="form-inline">
    <div class="form-group">
      <div class="input-group">
        <input class="form-control" placeholder="yyyy-mm-dd" name="Min-Max Date Picker" [(ngModel)]="MinMaxDPdata"
          ngbDatepicker #MinMaxDP="ngbDatepicker" [minDate]="{year: 2019, month: 1, day: 1}"
          [maxDate]="{year: 2020, month: 2, day: 15}">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary feather icon-calendar" (click)="MinMaxDP.toggle()"
            type="button" rippleEffect></button>
        </div>
      </div>
    </div>
  </form>
  <pre class="mt-2 p-1">Model: {{ MinMaxDPdata | json }}</pre>
  <!--/ Min-Max Date Picker -->
  `,
  ts: `
  public MinMaxDPdata: NgbDateStruct;

  `
};
export const snippetCodeCustomFooterDP: snippetCode = {
  html: `
  <!-- Custom Footer Date Picker -->
  <form class="form-inline">
    <div class="form-group">
      <div class="input-group">
        <input class="form-control" placeholder="yyyy-mm-dd" name="Custom Footer Date Picker"
          [(ngModel)]="customFooterDPdata" ngbDatepicker #customFooterDP="ngbDatepicker"
          [footerTemplate]="footerTemplate">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary feather icon-calendar" (click)="customFooterDP.toggle()"
            type="button" rippleEffect></button>
        </div>
      </div>
    </div>
  </form>
  <ng-template #footerTemplate>
    <hr class="my-0">
    <button class="btn btn-primary btn-sm m-2 float-left"
      (click)="customFooterDPdata = today; customFooterDP.close()" rippleEffect>Today</button>
    <button class="btn btn-secondary btn-sm m-2 float-right" (click)="customFooterDP.close()" rippleEffect>Close</button>
  </ng-template>
  <!--/ Custom Footer Date Picker -->
  `,
  ts: `
  public customFooterDPdata: NgbDateStruct;

  `
};
export const snippetCodeI18n: snippetCode = {
  html: `
  <date-picker-i18n></date-picker-i18n>
  `
};
export const snippetCodeCustomDay: snippetCode = {
  html: `
  <!-- Custom Day Date Picker -->
  <form class="form-inline">
    <div class="form-group">
      <div class="input-group">
        <input class="form-control" placeholder="yyyy-mm-dd" name="Custom Day Date Picker"
          [(ngModel)]="CustomDayDPdata" ngbDatepicker [dayTemplate]="customDay" [markDisabled]="isDisabled"
          #CustomDayDP="ngbDatepicker">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary feather icon-calendar" (click)="CustomDayDP.toggle()"
            type="button" rippleEffect></button>
        </div>
      </div>
    </div>
  </form>
  <ng-template #customDay let-date let-currentMonth="currentMonth" let-selected="selected" let-disabled="disabled"
    let-focused="focused">
    <span class="custom-day" [class.weekend]="isWeekend(date)" [class.focused]="focused"
      [class.bg-primary]="selected" [class.hidden]="date.month !== currentMonth" [class.text-muted]="disabled">
      {{ date.day }}
    </span>
  </ng-template>
  <!--/ Custom Day Date Picker -->
  `,
  ts: `
  public CustomDayDPdata: NgbDateStruct;
  public today = this.calendar.getToday();

  isWeekend = (date: NgbDate) => this.calendar.getWeekday(date) >= 6;

  isDisabled = (date: NgbDate, current: { month: number; year: number }) =>
  date.month !== current.month;
  `
};
export const snippetCodeRangeSelectionDP: snippetCode = {
  html: `
  <!-- Range selection Date Picker -->
  <form class="form-inline">
    <div class="form-group">
      <div class="input-group">
        <input name="datepicker" class="form-control" ngbDatepicker #rangeSelectionDP="ngbDatepicker"
          [autoClose]="'outside'" (dateSelect)="onDateSelection($event)" [displayMonths]="2" [dayTemplate]="t"
          outsideDays="hidden" [startDate]="fromDate!" [value]="formatter.format(today)">
        <ng-template #t let-date let-focused="focused">
          <span class="custom-day" [class.focused]="focused" [class.range]="isRange(date)"
            [class.faded]="isHovered(date) || isInside(date)" (mouseenter)="hoveredDate = date"
            (mouseleave)="hoveredDate = null">
            {{ date.day }}
          </span>
        </ng-template>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary feather icon-calendar" (click)="rangeSelectionDP.toggle()"
            type="button" rippleEffect></button>
        </div>
      </div>
    </div>
    <div class="form-group ml-sm-2 mt">
      <div class="input-group">
        <input #dpToDate class="form-control" placeholder="yyyy-mm-dd" name="dpToDate"
          [value]="formatter.format(toDate)">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary feather icon-calendar" (click)="rangeSelectionDP.toggle()"
            type="button" rippleEffect></button>
        </div>
      </div>
    </div>
  </form>
  <hr />
  <pre class="mt-2 p-1">From date model: {{ fromDate | json }}</pre>
  <pre class="mt-2 p-1">To date model: {{ toDate | json }}</pre>
  <!--/ Range selection Date Picker -->
  `,
  ts: `
  public hoveredDate: NgbDate | null = null;
  public fromDate: NgbDate | null;
  public toDate: NgbDate | null;

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (
      this.fromDate &&
      !this.toDate &&
      date &&
      date.after(this.fromDate)
    ) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }
  `
};

export const snippetCodeBasicTP: snippetCode = {
  html: `
  <!-- Basic Time Picker -->
  <ngb-timepicker [(ngModel)]="basicTP"></ngb-timepicker>
  <hr>
  <pre class="p-1">Selected time: {{basicTP | json}}</pre>
  <!--/ Basic Time Picker -->
  `,
  ts: `
  // Basic Time Picker
  public basicTP = { hour: 13, minute: 30 };
  `
};
export const snippetCodeMeridianTP: snippetCode = {
  html: `
  <!-- Meridian Time Picker -->
  <ngb-timepicker [(ngModel)]="meridianTPdata" [meridian]="meridianTP"></ngb-timepicker>
  <button class="btn btn-sm btn-outline-{{meridianTP ? 'success' : 'danger'}}" (click)="meridianTPtoggle()">
    Meridian - {{meridianTP ? "ON" : "OFF"}}
  </button>
  <hr>
  <pre class="p-1">Selected time: {{meridianTPdata | json}}</pre>
  <!--/ Meridian Time Picker -->
  `,
  ts: `
  // Meridian Time Picker
  public meridianTPdata = { hour: 13, minute: 30 };
  public meridianTP = true;
  `
};
export const snippetCodeCustomTP: snippetCode = {
  html: `
  <!-- Custom Time Picker -->
  <ngb-timepicker [(ngModel)]="customTPtime" [seconds]="customTPseconds"></ngb-timepicker>
  <button class="btn btn-sm btn-outline-{{customTPseconds ? 'success' : 'danger'}}"
    (click)="customTPtoggleSeconds()" rippleEffect>
    Seconds - {{customTPseconds ? "ON" : "OFF"}}
  </button>
  <hr>
  <pre class="p-1">Selected time: {{customTPtime | json}}</pre>
  <!--/ Custom Time Picker -->
  `,
  ts: `
  // Custom Time Picker
  public customTPtime: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  public customTPseconds = true;
  `
};
export const snippetCodeSpinnerTP: snippetCode = {
  html: `
  <!-- Spinner Time Picker -->
  <ngb-timepicker [(ngModel)]="spinnerTPtime" [spinners]="spinnerTP"></ngb-timepicker>

  <hr />

  <button class="m-t-1 btn btn-sm btn-outline-{{spinnerTP ? 'success' : 'danger'}}" (click)="snipperTPtoggle()" rippleEffect>
    Spinners - {{spinnerTP ? "ON" : "OFF"}}
  </button>
  <!--/ Spinner Time Picker -->
  `,
  ts: `
  // Spinner Time Picker
  public spinnerTPtime = { hour: 13, minute: 30 };
  public spinnerTP = true;

  `
};
export const snippetCodeCustomValidationTP: snippetCode = {
  html: `
  <!-- Custom Validation Time Picker -->
  <div class="form-group">
    <ngb-timepicker [formControl]="customValidationTP" required></ngb-timepicker>
    <div *ngIf="customValidationTP.valid" class="small form-text text-success">Great choice</div>
    <div *ngIf="customValidationTP.errors" class="small form-text text-danger">
      <div *ngIf="customValidationTP.errors['required']">Select some time during lunchtime</div>
      <div *ngIf="customValidationTP.errors['tooLate']">Oh no, it's way too late</div>
      <div *ngIf="customValidationTP.errors['tooEarly']">It's a bit too early</div>
    </div>
  </div>

  <hr>
  <pre class="p-1">Selected time: {{customValidationTP.value | json}}</pre>
  <!--/ Custom Validation Time Picker -->
  `,
  ts: `
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
  `
};
export const snippetCodei18nTP: snippetCode = {
  html: `
  <!-- i18n Time Picker -->
  <time-picker-i18n></time-picker-i18n>
  <!--/ i18n Time Picker -->
  `
};
