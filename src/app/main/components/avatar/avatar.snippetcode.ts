import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeSizes: snippetCode = {
  html: `
<div class="avatar avatar-sm">
  <span class="avatar-content">
    <img src="assets/images/portrait/small/avatar-s-20.jpg" alt="avatar" />
  </span>
</div>
<div class="avatar">
  <span class="avatar-content">
    <img
      src="assets/images/portrait/small/avatar-s-20.jpg"
      alt="avatar"
      width="32"
      height="32"
    />
  </span>
</div>
<div class="avatar avatar-lg">
  <img src="assets/images/portrait/small/avatar-s-20.jpg" alt="avatar" />
</div>
<div class="avatar avatar-xl">
  <img src="assets/images/portrait/small/avatar-s-20.jpg" alt="avatar" />
</div>
  `
};

export const snippetCodeInitials: snippetCode = {
  html: `
<div class="avatar bg-light-primary avatar-sm">
  <span class="avatar-content">PI</span>
</div>
<div class="avatar bg-light-secondary">
  <span class="avatar-content">PI</span>
</div>
<div class="avatar bg-light-success avatar-lg">
  <span class="avatar-content">PI</span>
</div>
<div class="avatar bg-light-danger avatar-xl">
  <span class="avatar-content">PI</span>
</div>
  `
};

export const snippetCodeColors: snippetCode = {
  html: `
<div class="avatar bg-primary">
  <div class="avatar-content">PI</div>
</div>
<div class="avatar bg-secondary">
  <div class="avatar-content">PI</div>
</div>
<div class="avatar bg-success">
  <div class="avatar-content">PI</div>
</div>
<div class="avatar bg-danger">
  <div class="avatar-content">PI</div>
</div>
<div class="avatar bg-warning">
  <div class="avatar-content">PI</div>
</div>
<div class="avatar bg-info">
  <div class="avatar-content">PI</div>
</div>
  `
};
export const snippetCodeLightColors: snippetCode = {
  html: `
<div class="avatar bg-light-primary">
  <div class="avatar-content">PI</div>
</div>
<div class="avatar bg-light-secondary">
  <div class="avatar-content">PI</div>
</div>
<div class="avatar bg-light-success">
  <div class="avatar-content">PI</div>
</div>
<div class="avatar bg-light-danger">
  <div class="avatar-content">PI</div>
</div>
<div class="avatar bg-light-warning">
  <div class="avatar-content">PI</div>
</div>
<div class="avatar bg-light-info">
  <div class="avatar-content">PI</div>
</div>
  `
};

export const snippetCodeIcons: snippetCode = {
  html: `
<div class="avatar bg-primary">
  <div class="avatar-content">
    <span [data-feather]="'calendar'" [class]="'avatar-icon'"></span>
  </div>
</div>
<div class="avatar bg-secondary">
  <div class="avatar-content">
    <span [data-feather]="'github'" [class]="'avatar-icon'"></span>
  </div>
</div>
<div class="avatar bg-success">
  <div class="avatar-content">
    <span [data-feather]="'inbox'" [class]="'avatar-icon'"></span>
  </div>
</div>
<div class="avatar bg-light-danger">
  <div class="avatar-content">
    <span [data-feather]="'camera'" [class]="'avatar-icon'"></span>
  </div>
</div>
<div class="avatar bg-light-warning">
  <div class="avatar-content">
    <span [data-feather]="'award'" [class]="'avatar-icon'"></span>
  </div>
</div>
<div class="avatar bg-light-info">
  <div class="avatar-content">
    <span [data-feather]="'star'" [class]="'avatar-icon'"></span>
  </div>
</div>
  `
};
export const snippetCodeStatus: snippetCode = {
  html: `
<div class="avatar">
  <img
    src="assets/images/portrait/small/avatar-s-20.jpg"
    alt="avatar"
    width="32"
    height="32"
  />
  <span class="avatar-status-offline"></span>
</div>
<div class="avatar bg-info">
  <span class="avatar-content">BV</span>
  <span class="avatar-status-busy"></span>
</div>
<div class="avatar bg-light-primary">
  <span class="avatar-content"><span [data-feather]="'github'" [class]="'avatar-icon'"></span></span>
  <span class="avatar-status-away"></span>
</div>
<div class="avatar bg-light-success">
  <span class="avatar-content">AB</span>
  <span class="avatar-status-online"></span>
</div>
  `
};

export const snippetCodeGroup: snippetCode = {
  html: `
<div class="avatar-group">
  <div class="avatar pull-up">
    <img
      class="media-object"
      src="assets/images/portrait/small/avatar-s-5.jpg"
      alt="Avatar"
      height="32"
      width="32"
    />
  </div>
  <div class="avatar pull-up">
    <img
      class="media-object"
      src="assets/images/portrait/small/avatar-s-7.jpg"
      alt="Avatar"
      height="32"
      width="32"
    />
  </div>
  <div class="avatar pull-up">
    <img
      class="media-object"
      src="assets/images/portrait/small/avatar-s-10.jpg"
      alt="Avatar"
      height="32"
      width="32"
    />
  </div>
  <div class="avatar pull-up">
    <img
      class="media-object"
      src="assets/images/portrait/small/avatar-s-8.jpg"
      alt="Avatar"
      height="32"
      width="32"
    />
  </div>
  <div class="avatar pull-up">
    <img
      class="media-object"
      src="assets/images/portrait/small/avatar-s-20.jpg"
      alt="Avatar"
      height="32"
      width="32"
    />
  </div>
</div>
`
};
export const snippetCodeGroupTooltip: snippetCode = {
  html: `
<div class="avatar-group">
  <div
    placement="top"
    class="avatar pull-up"
    ngbTooltip="Vinnie Mostowy"
    placement="top"
    container="body"
  >
    <img
      class="media-object"
      src="assets/images/portrait/small/avatar-s-5.jpg"
      alt="Avatar"
      height="32"
      width="32"
    />
  </div>
  <div placement="top" class="avatar pull-up" ngbTooltip="Elicia Rieske" placement="top" container="body">
    <img
      class="media-object"
      src="assets/images/portrait/small/avatar-s-7.jpg"
      alt="Avatar"
      height="32"
      width="32"
    />
  </div>
  <div
    placement="top"
    class="avatar pull-up"
    ngbTooltip="Julee Rossignol"
    placement="top"
    container="body"
  >
    <img
      class="media-object"
      src="assets/images/portrait/small/avatar-s-10.jpg"
      alt="Avatar"
      height="32"
      width="32"
    />
  </div>
  <div placement="top" class="avatar pull-up" ngbTooltip="Darcey Nooner" placement="top" container="body">
    <img
      class="media-object"
      src="assets/images/portrait/small/avatar-s-8.jpg"
      alt="Avatar"
      height="32"
      width="32"
    />
  </div>
  <div placement="top" class="avatar pull-up" ngbTooltip="Jenny Looper" placement="top" container="body">
    <img
      class="media-object"
      src="assets/images/portrait/small/avatar-s-20.jpg"
      alt="Avatar"
      height="32"
      width="32"
    />
  </div>
</div>
`
};
