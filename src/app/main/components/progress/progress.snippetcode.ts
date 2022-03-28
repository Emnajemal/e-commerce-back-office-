import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeBasicProgress: snippetCode = {
  html: `
<div class="progress-wrapper">
  <div class="mb-25">Reticulating splines&hellip; 0%</div>
  <ngb-progressbar type="primary" [value]="0"></ngb-progressbar>
</div>
<div class="progress-wrapper">
  <div class="mb-25">Reticulating splines&hellip; 25%</div>
  <ngb-progressbar type="primary" [value]="25"></ngb-progressbar>
</div>
<div class="progress-wrapper">
  <div class="mb-25">Reticulating splines&hellip; 50%</div>
  <ngb-progressbar type="primary" [value]="50"></ngb-progressbar>
</div>
<div class="progress-wrapper">
  <div class="mb-25">Reticulating splines&hellip; 75%</div>
  <ngb-progressbar type="primary" [value]="75"></ngb-progressbar>
</div>
<div class="progress-wrapper">
  <div class="mb-25">Reticulating splines&hellip; 100%</div>
  <ngb-progressbar type="primary" [value]="100"></ngb-progressbar>
</div>
`
};
export const snippetCodeColoredProgress: snippetCode = {
  html: `
<div class="progress-wrapper">
  <ngb-progressbar type="primary" class="progress-bar-primary" [value]="15"></ngb-progressbar>
</div>

<div class="progress-wrapper">
  <ngb-progressbar type="secondary" [value]="30"></ngb-progressbar>
</div>

<div class="progress-wrapper">
  <ngb-progressbar type="success" [value]="45"></ngb-progressbar>
</div>

<div class="progress-wrapper">
  <ngb-progressbar type="danger" [value]="60"></ngb-progressbar>
</div>

<div class="progress-wrapper">
  <ngb-progressbar type="warning" [value]="75"></ngb-progressbar>
</div>

<div class="progress-wrapper">
  <ngb-progressbar type="info" [value]="90"></ngb-progressbar>
</div>

<div class="progress-wrapper">
  <ngb-progressbar type="dark" [value]="100"></ngb-progressbar>
</div>`
};
export const snippetCodeLabeledProgress: snippetCode = {
  html: `
<div class="progress-wrapper">
  <ngb-progressbar
    showValue="true"
    type="primary"
    [height]="progressbarHeight"
    [value]="20"
  ></ngb-progressbar>
</div>

<div class="progress-wrapper">
  <ngb-progressbar
    showValue="true"
    type="success"
    [height]="progressbarHeight"
    [value]="40"
  ></ngb-progressbar>
</div>

<div class="progress-wrapper">
  <ngb-progressbar
    showValue="true"
    type="danger"
    [height]="progressbarHeight"
    [value]="60"
  ></ngb-progressbar>
</div>

<div class="progress-wrapper">
  <ngb-progressbar
    showValue="true"
    type="info"
    [height]="progressbarHeight"
    [value]="80"
  ></ngb-progressbar>
</div>

<div class="progress-wrapper">
  <ngb-progressbar
    showValue="true"
    type="warning"
    [height]="progressbarHeight"
    [value]="100"
  ></ngb-progressbar>
</div>
`
};
export const snippetCodeStripedProgress: snippetCode = {
  html: `
<div class="progress-wrapper">
  <ngb-progressbar
    type="primary"
    [value]="20"
    [striped]="true"
    [height]="progressbarHeight"
  ></ngb-progressbar>
</div>

<div class="progress-wrapper">
  <ngb-progressbar
    type="success"
    [value]="40"
    [striped]="true"
    [height]="progressbarHeight"
  ></ngb-progressbar>
</div>

<div class="progress-wrapper">
  <ngb-progressbar
    type="danger"
    [value]="60"
    [striped]="true"
    [height]="progressbarHeight"
  ></ngb-progressbar>
</div>

<div class="progress-wrapper">
  <ngb-progressbar
    type="info"
    [value]="80"
    [striped]="true"
    [height]="progressbarHeight"
  ></ngb-progressbar>
</div>

<div class="progress-wrapper">
  <ngb-progressbar
    type="warning"
    [value]="100"
    [striped]="true"
    [height]="progressbarHeight"
  ></ngb-progressbar>
</div>
`
};
export const snippetCodeAnimatedProgress: snippetCode = {
  html: `
<div class="progress-wrapper">
  <ngb-progressbar
    type="primary"
    [value]="20"
    [striped]="true"
    [animated]="true"
    [height]="progressbarHeight"
  ></ngb-progressbar>
</div>

<div class="progress-wrapper">
  <ngb-progressbar
    type="success"
    [value]="40"
    [striped]="true"
    [animated]="true"
    [height]="progressbarHeight"
  ></ngb-progressbar>
</div>

<div class="progress-wrapper">
  <ngb-progressbar
    type="danger"
    [value]="60"
    [striped]="true"
    [animated]="true"
    [height]="progressbarHeight"
  ></ngb-progressbar>
</div>

<div class="progress-wrapper">
  <ngb-progressbar
    type="info"
    [value]="80"
    [striped]="true"
    [animated]="true"
    [height]="progressbarHeight"
  ></ngb-progressbar>
</div>

<div class="progress-wrapper">
  <ngb-progressbar
    type="warning"
    [value]="100"
    [striped]="true"
    [animated]="true"
    [height]="progressbarHeight"
  ></ngb-progressbar>
</div>
`
};
