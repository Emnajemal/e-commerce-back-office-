import { Component, OnInit } from '@angular/core';

import * as snippet from 'app/main/forms/form-elements/checkbox/checkbox.snippetcode';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent implements OnInit {
  // public
  public contentHeader: object;

  public _snippetCodeBasic = snippet.snippetCodeBasic;
  public _snippetCodeCustom = snippet.snippetCodeCustom;
  public _snippetCodeCustomColor = snippet.snippetCodeCustomColor;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    // content header
    this.contentHeader = {
      headerTitle: 'Checkbox',
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
            name: 'Checkbox',
            isLink: false
          }
        ]
      }
    };
  }
}
