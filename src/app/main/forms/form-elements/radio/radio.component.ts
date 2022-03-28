import { Component, OnInit } from '@angular/core';

import * as snippet from 'app/main/forms/form-elements/radio/radio.snippetcode';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html'
})
export class RadioComponent implements OnInit {
  // public
  public contentHeader: object;

  public _snippetCodeRadioBasic = snippet.snippetCodeRadioBasic;
  public _snippetCodeRadioCustom = snippet.snippetCodeRadioCustom;
  public _snippetCodeRadioCustomColor = snippet.snippetCodeRadioCustomColor;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    // content header
    this.contentHeader = {
      headerTitle: 'Radio',
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
            name: 'Form Elements',
            isLink: true,
            link: '/'
          },
          {
            name: 'Radio',
            isLink: false
          }
        ]
      }
    };
  }
}
