import { Component, OnInit } from '@angular/core';

import * as snippet from 'app/main/components/avatar/avatar.snippetcode';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html'
})
export class AvatarComponent implements OnInit {
  // public
  public contentHeader: object;

  // snippet code variables
  public _snippetCodeInitials = snippet.snippetCodeInitials;
  public _snippetCodeSizes = snippet.snippetCodeSizes;
  public _snippetCodeColors = snippet.snippetCodeColors;
  public _snippetCodeLightColors = snippet.snippetCodeLightColors;
  public _snippetCodeIcons = snippet.snippetCodeIcons;
  public _snippetCodeStatus = snippet.snippetCodeStatus;
  public _snippetCodeGroup = snippet.snippetCodeGroup;
  public _snippetCodeGroupTooltip = snippet.snippetCodeGroupTooltip;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'Avatar',
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
            name: 'Avatar',
            isLink: false
          }
        ]
      }
    };
  }
}
