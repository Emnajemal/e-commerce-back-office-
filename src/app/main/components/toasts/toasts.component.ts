import { Component, OnInit } from '@angular/core';

import { ToastService } from 'app/main/components/toasts/toasts.service';

import * as snippet from 'app/main/components/toasts/toasts.snippetcode';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html'
})
export class ToastsComponent implements OnInit {
  // public
  public contentHeader: object;
  public hideValue: boolean = true;
  public toastStyle: object = {};

  // snippet code variables
  public _snippetCodeBasic = snippet.snippetCodeBasic;
  public _snippetCodeTranslucent = snippet.snippetCodeTranslucent;
  public _snippetCodeStacking = snippet.snippetCodeStacking;
  public _snippetCodePlacement = snippet.snippetCodePlacement;

  constructor(public toastService: ToastService) {}

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  toastBasic(data, delayTime) {
    this.toastService.show(data, {
      delay: delayTime,
      autohide: true
    });
  }

  toastAutoHide() {
    this.hideValue = !this.hideValue;
  }

  toastStacking() {
    this.toastService.show('Heads up, toasts will stack automatically', {
      autohide: this.hideValue
    });
  }

  toastPlacement() {
    this.toastService.show('Heads up, toasts will stack automatically', {
      autohide: true
    });
    this.toastStyle = { left: 0, right: 'unset' };
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'Toasts',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Components',
            isLink: true,
            link: '/'
          },
          {
            name: 'Toasts',
            isLink: false
          }
        ]
      }
    };
  }
}
