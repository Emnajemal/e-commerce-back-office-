import { Component, OnInit } from '@angular/core';

import * as snippet from 'app/main/components/divider/divider.snippetcode';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html'
})
export class DividerComponent implements OnInit {
  // public
  public contentHeader: object;

  public _snippetCodeDefault = snippet.snippetCodeDefault;
  public _snippetCodeText = snippet.snippetCodeText;
  public _snippetCodeTextPosition = snippet.snippetCodeTextPosition;
  public _snippetCodeColors = snippet.snippetCodeColors;
  public _snippetCodeIcons = snippet.snippetCodeIcons;
  public _snippetCodeStyle = snippet.snippetCodeStyle;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'Divider',
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
            name: 'Divider',
            isLink: false
          }
        ]
      }
    };
  }
}
