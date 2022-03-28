import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeFilled: snippetCode = {
  html: `
  <button type="button" class="btn btn-primary" rippleEffect>Primary</button
  ><button type="button" class="btn btn-secondary" rippleEffect>Secondary</button
  ><button type="button" class="btn btn-success" rippleEffect>Success</button
  ><button type="button" class="btn btn-danger" rippleEffect>Danger</button
  ><button type="button" class="btn btn-warning" rippleEffect>Warning</button
  ><button type="button" class="btn btn-info" rippleEffect>Info</button
  ><button type="button" class="btn btn-dark" rippleEffect>Dark</button>
  `
};
export const snippetCodeBorder: snippetCode = {
  html: `
  <button type="button" class="btn btn-outline-primary" rippleEffect>Primary</button
  ><button type="button" class="btn btn-outline-secondary" rippleEffect>Secondary</button
  ><button type="button" class="btn btn-outline-success" rippleEffect>Success</button
  ><button type="button" class="btn btn-outline-danger" rippleEffect>Danger</button
  ><button type="button" class="btn btn-outline-warning" rippleEffect>Warning</button
  ><button type="button" class="btn btn-outline-info" rippleEffect>Info</button
  ><button type="button" class="btn btn-outline-dark" rippleEffect>Dark</button>
  `
};
export const snippetCodeFlat: snippetCode = {
  html: `
  <button type="button" class="btn btn-flat-primary" rippleEffect>Primary</button
  ><button type="button" class="btn btn-flat-secondary" rippleEffect>Secondary</button
  ><button type="button" class="btn btn-flat-success" rippleEffect>Success</button
  ><button type="button" class="btn btn-flat-danger" rippleEffect>Danger</button
  ><button type="button" class="btn btn-flat-warning" rippleEffect>Warning</button
  ><button type="button" class="btn btn-flat-info" rippleEffect>Info</button
  ><button type="button" class="btn btn-flat-dark" rippleEffect>Dark</button>
  `
};
export const snippetCodeGradient: snippetCode = {
  html: `
  <button type="button" class="btn btn-gradient-primary">Primary</button
  ><button type="button" class="btn btn-gradient-secondary">Secondary</button
  ><button type="button" class="btn btn-gradient-success">Success</button
  ><button type="button" class="btn btn-gradient-danger">Danger</button
  ><button type="button" class="btn btn-gradient-warning">Warning</button
  ><button type="button" class="btn btn-gradient-info">Info</button
  ><button type="button" class="btn btn-gradient-dark">Dark</button>
  `
};
export const snippetCodeRelief: snippetCode = {
  html: `
  <button type="button" class="btn btn-relief-primary">Primary</button
  ><button type="button" class="btn btn-relief-secondary">Secondary</button
  ><button type="button" class="btn btn-relief-success">Success</button
  ><button type="button" class="btn btn-relief-danger">Danger</button
  ><button type="button" class="btn btn-relief-warning">Warning</button
  ><button type="button" class="btn btn-relief-info">Info</button
  ><button type="button" class="btn btn-relief-dark">Dark</button>
  `
};
export const snippetCodeRoundbuttons: snippetCode = {
  html: `
  <button type="button" class="btn btn-outline-primary round" rippleEffect>Primary</button
  ><button type="button" class="btn btn-outline-secondary round" rippleEffect>Secondary</button
  ><button type="button" class="btn btn-outline-success round" rippleEffect>Success</button
  ><button type="button" class="btn btn-outline-danger round" rippleEffect>Danger</button
  ><button type="button" class="btn btn-outline-warning round" rippleEffect>Warning</button
  ><button type="button" class="btn btn-outline-info round" rippleEffect>Info</button
  ><button type="button" class="btn btn-outline-dark round" rippleEffect>Dark</button>
  `
};
export const snippetCodeIcon: snippetCode = {
  html: `
<button type="button" class="btn btn-outline-primary" rippleEffect>
  <span [data-feather]="'home'" [class]="'mr-25'"></span>Home</button
><button type="button" class="btn btn-warning" rippleEffect>
  <span [data-feather]="'star'" [class]="'mr-25'"></span>Star</button
><button type="button" class="btn btn-flat-success" rippleEffect>
  <span [data-feather]="'check'" [class]="'mr-25'"></span>Done</button
><button type="button" class="btn btn-outline-primary" rippleEffect disabled>
  <span [data-feather]="'home'" [class]="'mr-25'"></span>Home
</button>
  `
};
export const snippetCodeIconOnly: snippetCode = {
  html: `
<button type="button" class="btn btn-icon btn-outline-primary" rippleEffect>
  <span [data-feather]="'search'"></span></button
>
<button type="button" class="btn btn-icon btn-warning" rippleEffect>
  <span [data-feather]="'inbox'"></span></button
>
<button type="button" class="btn btn-icon btn-flat-success" rippleEffect>
  <span [data-feather]="'camera'"></span></button
>
<button type="button" class="btn btn-icon btn-outline-primary" rippleEffect disabled>
  <span [data-feather]="'search'"></span></button
>
<button type="button" class="btn btn-icon rounded-circle btn-outline-primary" rippleEffect>
  <span [data-feather]="'search'"></span></button
>
<button type="button" class="btn btn-icon btn-icon rounded-circle btn-warning" rippleEffect>
  <span [data-feather]="'inbox'"></span></button
>
<button type="button" class="btn btn-icon btn-icon rounded-circle btn-flat-success" rippleEffect>
  <span [data-feather]="'camera'"></span></button
>
<button
  type="button"
  class="btn btn-icon btn-icon rounded-circle btn-outline-primary"
  rippleEffect
  disabled>
  <span [data-feather]="'search'"></span>
</button>
  `
};
export const snippetCodeBasicButtongroup: snippetCode = {
  html: `
  <div class="row">
  <div class="col-lg-6 col-12 mb-1 mb-lg-0">
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-primary" rippleEffect>Left</button
      ><button type="button" class="btn btn-primary" rippleEffect>Middle</button
      ><button type="button" class="btn btn-primary" rippleEffect>Right</button>
    </div>
  </div>
  <div class="col-lg-6 col-12">
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-outline-primary" rippleEffect>
        <span [data-feather]="'facebook'"></span></button>
      <button type="button" class="btn btn-outline-primary" rippleEffect>
        <span [data-feather]="'twitter'"></span></button>
      <button type="button" class="btn btn-outline-primary" rippleEffect>
        <span [data-feather]="'instagram'"></span>
      </button>
    </div>
  </div>
</div>
  `
};
export const snippetCodeRadioButtonStyle: snippetCode = {
  html: `
  <div class="row">
  <div class="col-lg-6 col-12 mb-1 mb-lg-0">
    <div class="btn-group btn-group-toggle">
      <label class="btn-primary" ngbButtonLabel rippleEffect
        ><input type="checkbox" ngbButton [(ngModel)]="checkboxModel.left" />Active </label>
      <label class="btn-primary" ngbButtonLabel rippleEffect
        ><input type="checkbox" ngbButton [(ngModel)]="checkboxModel.middle" />Checkbox </label>
      <label class="btn-primary" ngbButtonLabel rippleEffect>
        <input type="checkbox" ngbButton [(ngModel)]="checkboxModel.right" />Checkbox</label>
    </div>
  </div>
  <div class="col-lg-6 col-12">
    <div class="btn-group btn-group-toggle" ngbRadioGroup name="radioBasic" [(ngModel)]="radioModel">
      <label ngbButtonLabel class="btn-outline-primary" rippleEffect
        ><input ngbButton type="radio" [value]="1" />Active </label>
      <label ngbButtonLabel class="btn-outline-primary" rippleEffect
        ><input ngbButton type="radio" value="middle" />Radio </label>
      <label ngbButtonLabel class="btn-outline-primary" rippleEffect
        ><input ngbButton type="radio" [value]="false" />Radio
      </label>
    </div>
  </div>
</div>
  `,
  ts: `
  radioModel = 1;
  checkboxModel = {
    left: true,
    middle: false,
    right: false
  };
`
};
export const snippetCodeSizes: snippetCode = {
  html: `
  <!-- button sizes -->
  <button type="button" class="btn btn-primary btn-lg" rippleEffect>Large</button>
  <button type="button" class="btn btn-primary" rippleEffect>Default</button>
  <button type="button" class="btn btn-primary btn-sm" rippleEffect>Small</button>
  <!--/ button sizes -->

  <!-- button outline sizes -->
  <button type="button" class="btn btn-outline-primary btn-lg" rippleEffect>Large</button>
  <button type="button" class="btn btn-outline-primary" rippleEffect>Default</button>
  <button type="button" class="btn btn-outline-primary btn-sm" rippleEffect>Small</button>
  <!--/ button outline sizes -->
  `
};
export const snippetCodeBlocklevelbuttons: snippetCode = {
  html: `
<div class="col-lg-6 col-md-12">
  <div class="form-group">
    <button type="button" class="btn btn-primary btn-block" rippleEffect>Block level button</button>
  </div>
</div>
<div class="col-lg-6 col-md-12">
  <div class="form-group">
    <button type="button" class="btn btn-outline-primary btn-block" rippleEffect>
      Block level button
    </button>
  </div>
</div>
  `
};
export const snippetCodeButtontags: snippetCode = {
  html: `
  <ngb-alert [type]="'warning'" class="mb-0" [dismissible]="false">
  <div class="alert-body">
    <strong>Note:</strong>on click of "External Link" & "Router Link" button will redirect you to another
    page.
  </div>
  </ngb-alert>

  <a class="btn btn-primary" href="https://pixinvent.com/" role="button" target="_blank" rippleEffect
    >External Link</a
  ><button class="btn btn-primary" [routerLink]="['/pages/login']" type="button" rippleEffect>
    Router Link</button
  ><button class="btn btn-primary" type="submit" rippleEffect>Button</button
  ><input class="btn btn-primary" type="button" value="Input" rippleEffect /><input
    class="btn btn-primary"
    type="submit"
    value="Submit"
    rippleEffect
  />

  `
};
