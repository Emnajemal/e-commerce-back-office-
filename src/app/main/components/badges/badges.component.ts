import { Component, OnInit } from '@angular/core';
import * as snippet from 'app/main/components/badges/badges.snippetcode';
@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html'
})
export class BadgesComponent implements OnInit {
  // public
  public contentHeader: object;

  // snippet code variables
  public _snippetCodeBadge = snippet.snippetCodeBadge;
  public _snippetCodeGlowBadge = snippet.snippetCodeGlowBadge;
  public _snippetCodeLightBadge = snippet.snippetCodeLightBadge;
  public _snippetCodeWithIcons = snippet.snippetCodeWithIcons;
  public _snippetCodeLink = snippet.snippetCodeLink;
  public _snippetCodeBlockWithLink = snippet.snippetCodeBlockWithLink;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'Badges',
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
            name: 'Badges',
            isLink: false
          }
        ]
      }
    };
  }
}
