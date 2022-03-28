import { Component, TemplateRef } from '@angular/core';

import { ToastService } from 'app/main/components/toasts/toasts.service';
@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  host: { '[class.ngb-toasts]': 'true' }
})
export class ToastContainerComponent {
  constructor(public toastService: ToastService) {}

  isTemplate(toast) {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
