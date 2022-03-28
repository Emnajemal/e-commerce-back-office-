import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeBasic: snippetCode = {
  html: `
  <button class="btn btn-primary" (click)="toastBasic('I am a Basic toast', 2000)" rippleEffect>Toast</button>
  `,
  ts: `
  toastBasic(data, delayTime) {
    this.toastService.show(data, {
      delay: delayTime,
      autohide: true
    });
  }
  `
};
export const snippetCodeTranslucent: snippetCode = {
  html: `
<ngb-toast [autohide]="false">
  <ng-template ngbToastHeader>
    <img
      src="assets/images/logo/logo.png"
      height="18"
      width="25"
      class="mr-2"
      alt="Toast image"
    />
    <strong class="mr-auto toast-title">Vuexy Admin</strong>
    <small class="text-muted toast-time ml-5 mr-1 pl-3">11 mins ago</small>
  </ng-template>
  Hello, world! This is a toast message.
</ngb-toast>
  `
};
export const snippetCodeStacking: snippetCode = {
  html: `
<button class="btn btn-outline-primary" (click)="toastAutoHide()" rippleEffect>
  Auto Hide: {{ hideValue }}
</button>
<button class="btn btn-outline-primary" (click)="toastStacking()" rippleEffect>Toast</button>
  `,
  ts: `
  toastAutoHide() {
    this.hideValue = !this.hideValue;
  }

  toastStacking() {
    this.toastService.show('Heads up, toasts will stack automatically', {
      autohide: this.hideValue
    });
  }
  `
};
export const snippetCodePlacement: snippetCode = {
  html: `
  <button class="btn btn-outline-info" (click)="toastPlacement()" rippleEffect>Toast Placement</button>
  `,
  ts: `
  toastPlacement() {
    this.toastService.show('Heads up, toasts will stack automatically', {
      autohide: true
    });
    this.toastStyle = { left: 0, right: 'unset' };
  }
  `
};
