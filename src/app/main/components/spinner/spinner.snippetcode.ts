import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeBorder: snippetCode = {
  html: `
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  `
};
export const snippetCodeColored: snippetCode = {
  html: `
<div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>

<div class="spinner-border text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>

<div class="spinner-border text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>

<div class="spinner-border text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>

<div class="spinner-border text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>

<div class="spinner-border text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>

<div class="spinner-border text-light" role="status">
  <span class="sr-only">Loading...</span>
</div>

<div class="spinner-border text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div>
  `
};
export const snippetCodeGrowing: snippetCode = {
  html: `
  <div class="spinner-grow" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  `
};
export const snippetCodeColoredGrowing: snippetCode = {
  html: `
<div class="spinner-grow text-primary mr-1" role="status">
  <span class="sr-only">Loading...</span>
</div>

<div class="spinner-grow text-secondary mr-1" role="status">
  <span class="sr-only">Loading...</span>
</div>

<div class="spinner-grow text-success mr-1" role="status">
  <span class="sr-only">Loading...</span>
</div>

<div class="spinner-grow text-danger mr-1" role="status">
  <span class="sr-only">Loading...</span>
</div>

<div class="spinner-grow text-warning mr-1" role="status">
  <span class="sr-only">Loading...</span>
</div>

<div class="spinner-grow text-info mr-1" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-light mr-1" role="status">
  <span class="sr-only">Loading...</span>
</div>

<div class="spinner-grow text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div>
  `
};
export const snippetCodeFlex: snippetCode = {
  html: `
<div class="d-flex justify-content-center my-1">
  <div class="spinner-border" role="status" aria-hidden="true"></div>
</div>
<div class="d-flex align-items-center">
  <strong>Loading...</strong>
  <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
</div>
  `
};
export const snippetCodeFloat: snippetCode = {
  html: `
<div class="clearfix">
  <div class="spinner-border float-right" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
  `
};
export const snippetCodeTextAlignment: snippetCode = {
  html: `
<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
  `
};
export const snippetCodeSizes: snippetCode = {
  html: `
<div class="spinner-border spinner-border-sm mr-50" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner-grow spinner-grow-sm" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
<div>
  <div class="spinner-border mr-50" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner-grow" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
<div>
  <div class="spinner-border mr-50" style="width: 3rem; height: 3rem" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner-grow" style="width: 3rem; height: 3rem" role="status">
    <span class="sr-only">Loading...</span>
  </div>

  `
};
export const snippetCodeButtons: snippetCode = {
  html: `
<button class="btn btn-outline-primary" type="button" disabled rippleEffect>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>
</button>

<button class="btn btn-outline-primary" type="button" disabled rippleEffect>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="ml-25 align-middle">Loading...</span>
</button>

<button class="btn btn-outline-primary" type="button" disabled rippleEffect>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>
</button>

<button class="btn btn-outline-primary" type="button" disabled rippleEffect>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  <span class="ml-25 align-middle">Loading...</span>
</button>
  `
};
