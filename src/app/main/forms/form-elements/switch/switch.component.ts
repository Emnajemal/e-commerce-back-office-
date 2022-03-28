import { Component, OnInit } from '@angular/core';

import * as snippet from 'app/main/forms/form-elements/switch/switch.snippetcode';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html'
})
export class SwitchComponent implements OnInit {
  // public
  public contentHeader: object;

  public _snippetCodeBasic = snippet.snippetCodeBasic;
  public _snippetCodeColors = snippet.snippetCodeColors;
  public _snippetCodeIcons = snippet.snippetCodeIcons;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    // content header
    this.contentHeader = {
      headerTitle: 'Switch',
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
            name: 'Switch',
            isLink: false
          }
        ]
      }
    };
  }
}
