import { Component, OnInit } from '@angular/core';

import * as snippet from 'app/main/components/list-group/list-group.snippetcode';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html'
})
export class ListGroupComponent implements OnInit {
  // public
  public contentHeader: object;

  // snippet code variables
  public _snippetCodeSimpleListGroup = snippet.snippetCodeSimpleListGroup;
  public _snippetCodeDisabledItems = snippet.snippetCodeDisabledItems;
  public _snippetCodeIcons = snippet.snippetCodeIcons;
  public _snippetCodeBadges = snippet.snippetCodeBadges;
  public _snippetCodeAnchors = snippet.snippetCodeAnchors;
  public _snippetCodeButtons = snippet.snippetCodeButtons;
  public _snippetCodeContextualclasses = snippet.snippetCodeContextualclasses;
  public _snippetCodeCustomContent = snippet.snippetCodeCustomContent;
  public _snippetCodeFlush = snippet.snippetCodeFlush;
  public _snippetCodeHorizontal = snippet.snippetCodeHorizontal;
  public _snippetCodeListGroupNavigation = snippet.snippetCodeListGroupNavigation;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'List Group',
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
            name: 'List Group',
            isLink: false
          }
        ]
      }
    };
  }
}
