import { Component, OnInit } from '@angular/core';

import * as snippet from 'app/main/components/pill-badges/pill-badges.snippetcode';

@Component({
  selector: 'app-pill-badges',
  templateUrl: './pill-badges.component.html'
})
export class PillBadgesComponent implements OnInit {
  // public
  public contentHeader: object;

  // snippet code variables
  public _snippetCodePillBadges = snippet.snippetCodePillBadges;
  public _snippetCodeGlowBadges = snippet.snippetCodeGlowBadges;
  public _snippetCodeLightBadges = snippet.snippetCodeLightBadges;
  public _snippetCodePillNotification = snippet.snippetCodePillNotification;
  public _snippetCodeBadgePillLink = snippet.snippetCodeBadgePillLink;
  public _snippetCodeBlockBadgePill = snippet.snippetCodeBlockBadgePill;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'Pill Badges',
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
            name: 'Pill Badges',
            isLink: false
          }
        ]
      }
    };
  }
}
