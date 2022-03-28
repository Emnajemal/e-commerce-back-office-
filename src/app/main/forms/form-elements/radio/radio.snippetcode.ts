import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeRadioBasic: snippetCode = {
  html: `
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      name="inlineRadioOptions"
      id="inlineRadio1"
      value="option1"
      checked
    />
    <label class="form-check-label" for="inlineRadio1">Checked</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      name="inlineRadioOptions"
      id="inlineRadio2"
      value="option2"
    />
    <label class="form-check-label" for="inlineRadio2">Unchecked</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      name="inlineRadioDisabledOptions"
      id="inlineRadio3"
      value="option3"
      checked
      disabled
    />
    <label class="form-check-label" for="inlineRadio3">Checked disabled</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="radio"
      name="inlineRadioDisabledOptions"
      id="inlineRadio4"
      value="option4"
      disabled
    />
    <label class="form-check-label" for="inlineRadio4">Unchecked disabled</label>
  </div>
  `
};
export const snippetCodeRadioCustom: snippetCode = {
  html: `
  <div class="custom-control custom-radio">
    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" checked />
    <label class="custom-control-label" for="customRadio1">Checked</label>
  </div>
  <div class="custom-control custom-radio">
    <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
    <label class="custom-control-label" for="customRadio2">Unchecked</label>
  </div>
  <div class="custom-control custom-radio">
    <input
      type="radio"
      id="customRadio3"
      name="customDisabledRadio"
      class="custom-control-input"
      checked
      disabled
    />
    <label class="custom-control-label" for="customRadio3">Checked disabled</label>
  </div>
  <div class="custom-control custom-radio">
    <input
      type="radio"
      id="customRadio4"
      name="customDisabledRadio"
      class="custom-control-input"
      disabled
    />
    <label class="custom-control-label" for="customRadio4">Unchecked disabled</label>
  </div>
  `
};
export const snippetCodeRadioCustomColor: snippetCode = {
  html: `
<div class="custom-control custom-control-primary custom-radio">
  <input
    type="radio"
    id="customColorRadio1"
    name="customColorRadio1"
    class="custom-control-input"
    checked
  />
  <label class="custom-control-label" for="customColorRadio1">Primary</label>
</div>

<div class="custom-control custom-control-secondary custom-radio">
  <input
    type="radio"
    id="customColorRadio2"
    name="customColorRadio2"
    class="custom-control-input"
    checked
  />
  <label class="custom-control-label" for="customColorRadio2">Secondary</label>
</div>

<div class="custom-control custom-control-success custom-radio">
  <input
    type="radio"
    id="customColorRadio3"
    name="customColorRadio3"
    class="custom-control-input"
    checked
  />
  <label class="custom-control-label" for="customColorRadio3">Success</label>
</div>

<div class="custom-control custom-control-danger custom-radio">
  <input
    type="radio"
    id="customColorRadio5"
    name="customColorRadio5"
    class="custom-control-input"
    checked
  />
  <label class="custom-control-label" for="customColorRadio5">Danger</label>
</div>

<div class="custom-control custom-control-warning custom-radio">
  <input
    type="radio"
    id="customColorRadio4"
    name="customColorRadio4"
    class="custom-control-input"
    checked
  />
  <label class="custom-control-label" for="customColorRadio4">Warning</label>
</div>

<div class="custom-control custom-control-info custom-radio">
  <input
    type="radio"
    id="customRadio6"
    name="customColorRadio6"
    class="custom-control-input"
    checked
  />
  <label class="custom-control-label" for="customRadio6">Info</label>
</div>
  `
};
