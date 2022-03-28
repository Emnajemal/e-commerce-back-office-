import { Component, OnInit } from '@angular/core';

import * as snippet from 'app/main/components/pills/pills.snippetcode';

@Component({
  selector: 'app-pills',
  templateUrl: './pills.component.html'
})
export class PillsComponent implements OnInit {
  // public
  public contentHeader: object;

  // snippet code variables
  public _snippetCodeBasic = snippet.snippetCodeBasic;
  public _snippetCodeFilled = snippet.snippetCodeFilled;
  public _snippetCodeJustified = snippet.snippetCodeJustified;
  public _snippetCodeCenterAlignment = snippet.snippetCodeCenterAlignment;
  public _snippetCodeRightAlignment = snippet.snippetCodeRightAlignment;
  public _snippetCodeVerticallyStackedPills = snippet.snippetCodeVerticallyStackedPills;
  public _snippetCodePillThemes = snippet.snippetCodePillThemes;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'pills',
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
            name: 'pills',
            isLink: false
          }
        ]
      }
    };
  }
}
