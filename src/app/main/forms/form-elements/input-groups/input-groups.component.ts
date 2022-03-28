import { Component, OnInit } from '@angular/core';

import * as snippet from 'app/main/forms/form-elements/input-groups/input-groups.snippetcode';

@Component({
  selector: 'app-input-groups',
  templateUrl: './input-groups.component.html'
})
export class InputGroupsComponent implements OnInit {
  // public
  public contentHeader: object;

  public basicPwdShow = false;
  public mergedPwdShow = false;

  // Snippet Code Variables
  public _snippetCodeBasic = snippet.snippetCodeBasic;
  public _snippetCodeMerged = snippet.snippetCodeMerged;
  public _snippetCodeSizing = snippet.snippetCodeSizing;
  public _snippetCodeCheckBox = snippet.snippetCodeCheckBox;
  public _snippetCodeButton = snippet.snippetCodeButton;
  public _snippetCodeDropdown = snippet.snippetCodeDropdown;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    // content header
    this.contentHeader = {
      headerTitle: 'Input Groups',
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
            name: 'Input Groups',
            isLink: false
          }
        ]
      }
    };
  }
}
