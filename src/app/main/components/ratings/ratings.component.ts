import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import * as snippet from 'app/main/components/ratings/ratings.snippetcode';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {
  // public
  public contentHeader: object;
  public basicCurrentRate = 8;
  public sizeSMCurrentRate = 4;
  public sizeCurrentRate = 4;
  public sizeLGCurrentRate = 4;
  public iconsCurrentRate = 8;
  public ERselected = 0;
  public ERhovered = 0;
  public ERreadonly = false;
  public decimalCurrentRate = 2.25;
  public ctrl = new FormControl(null, Validators.required);

  // snippet code variables
  public _snippetCodeBasic = snippet.snippetCodeBasic;
  public _snippetCodeSizes = snippet.snippetCodeSizes;
  public _snippetCodeIcons = snippet.snippetCodeIcons;
  public _snippetCodeReadonly = snippet.snippetCodeReadonly;
  public _snippetCodeIntegration = snippet.snippetCodeIntegration;
  public _snippetCodeCustomdecimal = snippet.snippetCodeCustomdecimal;

  // Public Methods
  // -----------------------------------------------------------------------------------------------------
  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }
  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'Ratings',
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
            name: 'Ratings',
            isLink: false
          }
        ]
      }
    };
  }
}
