import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const basicDateSnippetCode: snippetCode = {
  html: `<ng2-flatpickr [ngClass]="'firstsecond'" [config]="basicDateOptions" name="basicDate"></ng2-flatpickr>`,
  ts: `public basicDateOptions: FlatpickrOptions = {
  altInput: true
}`
};

export const dateTimeSnippetCode: snippetCode = {
  html: `<ng2-flatpickr [config]="dateTimeOptions" name="dateTime"></ng2-flatpickr>`,
  ts: `public dateTimeOptions: FlatpickrOptions = {
    altInput: true,
    enableTime: true
  }`
};

export const DefaultDateSnippetCode: snippetCode = {
  html: `<ng2-flatpickr [config]="DefaultDateOptions" name="DefaultDate"></ng2-flatpickr>`,
  ts: `public DefaultDateOptions: FlatpickrOptions = {
    defaultDate: '2019-03-19',
    altInput: true
  }`
};

export const DateRangeSnippetCode: snippetCode = {
  html: `<ng2-flatpickr [config]="DateRangeOptions" name="DateRange"></ng2-flatpickr>`,
  ts: `public DateRangeOptions: FlatpickrOptions = {
    altInput: true,
    mode: 'range'
  }`
};

export const timeSnippetCode: snippetCode = {
  html: `<ng2-flatpickr [config]="timeOptions" name="time"></ng2-flatpickr>`,
  ts: `public   timeOptions: FlatpickrOptions = {
  enableTime: true,
  noCalendar: true,
  altInput: true
}`
};

export const customDateSnippetCode: snippetCode = {
  html: `<ng2-flatpickr [config]="customDateOptions" name="customDate"></ng2-flatpickr>`,
  ts: `public customDateOptions: FlatpickrOptions = {
    altFormat: 'j-m-Y',
    altInput: true
  }`
};

export const multipleDateSnippetCode: snippetCode = {
  html: `<ng2-flatpickr [config]="multipleDateOptions" name="multipleDate"></ng2-flatpickr>`,
  ts: `public multipleDateOptions: FlatpickrOptions = {
    altInput: true,
    mode: 'multiple'
  }`
};
