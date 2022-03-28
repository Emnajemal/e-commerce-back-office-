import { Component, OnInit } from '@angular/core';

import * as snippet from 'app/main/components/tabs/tabs.snippetcode';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit {
  // public
  public contentHeader: object;

  // snippet code variables
  public _snippetCodeBasicTab = snippet.snippetCodeBasicTab;
  public _snippetCodeIconTab = snippet.snippetCodeIconTab;
  public _snippetCodeVerticalLeftTabs = snippet.snippetCodeVerticalLeftTabs;
  public _snippetCodeVerticalRightTabs = snippet.snippetCodeVerticalRightTabs;
  public _snippetCodeFilled = snippet.snippetCodeFilled;
  public _snippetCodeJustified = snippet.snippetCodeJustified;
  public _snippetCodeCenter = snippet.snippetCodeCenter;
  public _snippetCodeEnd = snippet.snippetCodeEnd;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'Tabs',
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
            name: 'tabs',
            isLink: false
          }
        ]
      }
    };
  }
}
