import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeBasic: snippetCode = {
  html: `
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="checked" checked />
    <label class="form-check-label" for="inlineCheckbox1">Checked</label>
  </div>

  <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="unchecked" />
    <label class="form-check-label" for="inlineCheckbox2">Unchecked</label>
  </div>

  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="checkbox"
      id="inlineCheckbox3"
      value="checked-disabled"
      checked
      disabled
    />
    <label class="form-check-label" for="inlineCheckbox3">Checked disabled</label>
  </div>

  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="checkbox"
      id="inlineCheckbox4"
      value="unchecked-disabled"
      disabled
    />
    <label class="form-check-label" for="inlineCheckbox4">Unchecked disabled</label>
  </div>
`
};
export const snippetCodeCustom: snippetCode = {
  html: `
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck1" checked />
    <label class="custom-control-label" for="customCheck1">Checked</label>
  </div>

  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck2" />
    <label class="custom-control-label" for="customCheck2">Unchecked</label>
  </div>

  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck3" checked disabled />
    <label class="custom-control-label" for="customCheck3">Checked disabled</label>
  </div>

  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck4" disabled />
    <label class="custom-control-label" for="customCheck4">Unchecked disabled</label>
  </div>
  `
};
export const snippetCodeCustomColor: snippetCode = {
  html: `
  <div class="custom-control custom-control-primary custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="colorCheck1" checked />
    <label class="custom-control-label" for="colorCheck1">Primary</label>
  </div>

  <div class="custom-control custom-control-secondary custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="colorCheck2" checked />
    <label class="custom-control-label" for="colorCheck2">Secondary</label>
  </div>

  <div class="custom-control custom-control-success custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="colorCheck3" checked />
    <label class="custom-control-label" for="colorCheck3">Success</label>
  </div>

  <div class="custom-control custom-control-danger custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="colorCheck5" checked />
    <label class="custom-control-label" for="colorCheck5">Danger</label>
  </div>

  <div class="custom-control custom-control-warning custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="colorCheck4" checked />
    <label class="custom-control-label" for="colorCheck4">Warning</label>
  </div>

  <div class="custom-control custom-control-info custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="colorCheck6" checked />
    <label class="custom-control-label" for="colorCheck6">Info</label>
  </div>
`
};
