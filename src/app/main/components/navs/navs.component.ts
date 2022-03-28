import { Component, OnInit } from '@angular/core';

import * as snippet from 'app/main/components/navs/navs.snippetcode';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html'
})
export class NavsComponent implements OnInit {
  // public
  public contentHeader: object;

  // snippet code variables
  public _snippetCodeBaseNav = snippet.snippetCodeBaseNav;
  public _snippetCodeHorizontalNavWithBorder = snippet.snippetCodeHorizontalNavWithBorder;
  public _snippetCodeCenterAlignment = snippet.snippetCodeCenterAlignment;
  public _snippetCodeEndAlignment = snippet.snippetCodeEndAlignment;
  public _snippetCodeVerticalNav = snippet.snippetCodeVerticalNav;
  public _snippetCodeNavWithBorder = snippet.snippetCodeNavWithBorder;
  public _snippetCodeNavWithSquareBorder = snippet.snippetCodeNavWithSquareBorder;
  public _snippetCodeNavWithDivider = snippet.snippetCodeNavWithDivider;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'Navs',
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
            name: 'Navs',
            isLink: false
          }
        ]
      }
    };
  }
}
