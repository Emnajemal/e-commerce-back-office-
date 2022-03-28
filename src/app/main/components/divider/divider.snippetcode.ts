import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeDefault: snippetCode = {
  html: `
  <hr>
  `
};
export const snippetCodeText: snippetCode = {
  html: `
  <div class="divider">
    <div class="divider-text">My Text</div>
  </div>
  `
};
export const snippetCodeTextPosition: snippetCode = {
  html: `
  <div class="divider divider-left">
    <div class="divider-text">Left</div>
  </div>

  <div class="divider divider-left-center">
    <div class="divider-text">Left Center</div>
  </div>

  <div class="divider">
    <div class="divider-text">Center(Default)</div>
  </div>

  <div class="divider divider-right-center">
    <div class="divider-text">Right Center</div>
  </div>

  <div class="divider divider-right">
    <div class="divider-text">Right</div>
  </div>
  `
};
export const snippetCodeColors: snippetCode = {
  html: `
<div class="divider">
  <div class="divider-text">Default</div>
</div>
<div class="divider divider-primary">
  <div class="divider-text">Primary</div>
</div>
<div class="divider divider-secondary">
  <div class="divider-text">Secondary</div>
</div>
<div class="divider divider-success">
  <div class="divider-text">Success</div>
</div>
<div class="divider divider-danger">
  <div class="divider-text">Danger</div>
</div>
<div class="divider divider-warning">
  <div class="divider-text">Warning</div>
</div>
<div class="divider divider-info">
  <div class="divider-text">Info</div>
</div>
<div class="divider divider-dark">
  <div class="divider-text">Dark</div>
</div>
  `
};
export const snippetCodeIcons: snippetCode = {
  html: `
  <div class="divider divider-left">
    <div class="divider-text"><span [data-feather]="'arrow-down'"></span></div>
  </div>
  <div class="divider divider-left-center">
    <div class="divider-text"><span [data-feather]="'star'"></span></div>
  </div>
  <div class="divider">
    <div class="divider-text"><span [data-feather]="'check'"></span></div>
  </div>
  <div class="divider divider-right-center">
    <div class="divider-text"><span [data-feather]="'x-circle'"></span></div>
  </div>
  <div class="divider divider-right">
    <div class="divider-text"><span [data-feather]="'clock'"></span></div>
  </div>
  `
};
export const snippetCodeStyle: snippetCode = {
  html: `
  <div class="divider divider-dotted">
    <div class="divider-text">Dotted</div>
  </div>

  <div class="divider divider-dashed">
    <div class="divider-text">Dashed</div>
  </div>

  <div class="divider">
    <div class="divider-text">Solid</div>
  </div>
  `
};
