import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeBasicInputs: snippetCode = {
  html: `
<div class="row">
  <div class="col-xl-4 col-md-6 col-12 mb-1">
    <div class="form-group">
      <label for="basicInput">Basic Input</label>
      <input type="text" class="form-control" id="basicInput" placeholder="Enter email" />
    </div>
  </div>
  <div class="col-xl-4 col-md-6 col-12 mb-1">
    <div class="form-group">
      <label for="helpInputTop">Input text with help</label>
      <small class="text-muted"> eg.<i>someone@example.com</i></small>
      <input type="text" class="form-control" id="helpInputTop" />
    </div>
  </div>
  <div class="col-xl-4 col-md-6 col-12 mb-1">
    <div class="form-group">
      <label for="disabledInput">Disabled Input</label>
      <input type="text" class="form-control" id="disabledInput" disabled />
    </div>
  </div>
  <div class="col-xl-4 col-md-6 col-12">
    <div class="form-group">
      <label for="helperText">With Helper Text</label>
      <input type="text" id="helperText" class="form-control" placeholder="Name" />
      <p><small class="text-muted">Find helper text here for given textbox.</small></p>
    </div>
  </div>
  <div class="col-xl-4 col-md-6 col-12">
    <div class="form-group">
      <label for="disabledInput">Readonly Input</label>
      <input
        type="text"
        class="form-control"
        id="readonlyInput"
        readonly="readonly"
        value="You can't update me :P"
      />
    </div>
  </div>
  <div class="col-xl-4 col-md-6 col-12">
    <div class="form-group">
      <label for="disabledInput">Readonly Static Text</label>
      <p class="form-control-static" id="staticInput">email@pixinvent.com</p>
    </div>
  </div>
</div>
  `
};
export const snippetCodeSizingOptions: snippetCode = {
  html: `
<div class="form-group">
  <label for="largeInput">Large</label>
  <input class="form-control form-control-lg" type="text" placeholder="Large Input" />
</div>
<div class="form-group">
  <label for="largeInput">Default</label>
  <input class="form-control" type="text" placeholder="Normal Input" />
</div>
<div class="form-group">
  <label for="largeInput">Small</label>
  <input class="form-control form-control-sm" type="text" placeholder="Small Input" />
</div>
  `
};
export const snippetCodeHorizontalFormLabelSizing: snippetCode = {
  html: `
<div class="form-group row">
  <label for="colFormLabelLg" class="col-sm-3 col-form-label col-form-label-lg">Large</label>
  <div class="col-sm-9">
    <input
      type="text"
      class="form-control form-control-lg"
      id="colFormLabelLg"
      placeholder="Large Input"
    />
  </div>
</div>

<div class="form-group row">
  <label for="colFormLabel" class="col-sm-3 col-form-label">Default</label>
  <div class="col-sm-9">
    <input type="text" class="form-control" id="colFormLabel" placeholder="Normal Input" />
  </div>
</div>

<div class="form-group row">
  <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Small</label>
  <div class="col-sm-9">
    <input
      type="text"
      class="form-control form-control-sm"
      id="colFormLabelSm"
      placeholder="Small Input"
    />
  </div>
</div>
  `
};
export const snippetCodeFloatingLabelInputs: snippetCode = {
  html: `
<div class="form-label-group">
  <input type="text" class="form-control" id="floating-label1" placeholder="Label-placeholder" />
  <label for="floating-label1">Label-placeholder</label>
</div>

<div class="form-label-group">
  <input
    type="text"
    class="form-control"
    id="floating-label-disable"
    placeholder="Label-placeholder"
    disabled
  />
  <label for="floating-label-disable">Disabled-placeholder</label>
</div>
  `
};
export const snippetCodeFileInput: snippetCode = {
  html: `
<div class="form-group">
  <label for="basicInputFile">Simple File Input</label>
  <input type="file" class="form-control-file" id="basicInputFile" />
</div>

<div class="form-group">
  <label for="basicInputFile">With Browse button</label>
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="customFile" />
    <label class="custom-file-label" for="customFile">Choose file</label>
  </div>
</div>
  `
};
export const snippetCodeInputValidationStates: snippetCode = {
  html: `
<div class="row match-height">
  <div class="col-12">
    <p>
      You can indicate invalid and valid form fields with <code>.is-invalid</code> and
      <code>.is-valid</code>. Note that <code>.invalid-feedback</code> is also supported with these
      classes.
    </p>
  </div>
  <div class="col-sm-6 col-12">
    <label for="valid-state">Valid State</label>
    <input
      type="text"
      class="form-control is-valid"
      id="valid-state"
      placeholder="Valid"
      value="Valid"
      required
    />
    <div class="valid-feedback">This is valid state.</div>
  </div>
  <div class="col-sm-6 col-12">
    <label for="invalid-state">Invalid State</label>
    <input
      type="text"
      class="form-control is-invalid"
      id="invalid-state"
      placeholder="Invalid"
      value="Invalid"
      required
    />
    <div class="invalid-feedback">This is invalid state.</div>
  </div>
</div>
  `
};
