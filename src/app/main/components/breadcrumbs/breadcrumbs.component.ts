import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from 'app/layout/components/content-header/breadcrumb/breadcrumb.component';

import * as snippet from 'app/main/components/breadcrumbs/breadcrumbs.snippetcode';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent implements OnInit {
  // public
  public contentHeader: object;
  public breadcrumbDefault: Breadcrumb;
  public breadcrumbSlash: Breadcrumb;
  public breadcrumbDots: Breadcrumb;
  public breadcrumbDashes: Breadcrumb;
  public breadcrumbPipes: Breadcrumb;
  public breadcrumbChevron: Breadcrumb;
  public breadcrumbLeft: Breadcrumb;
  public breadcrumbCenter: Breadcrumb;
  public breadcrumbRight: Breadcrumb;

  // snippet code variables
  public _snippetCodeDefault = snippet.snippetCodeDefault;
  public _snippetCodeStyles = snippet.snippetCodeStyles;
  public _snippetCodeAlignment = snippet.snippetCodeAlignment;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // breadcrumb default
    this.breadcrumbDefault = {
      links: [
        {
          name: 'Home',
          isLink: true,
          link: '/'
        },
        {
          name: 'Library',
          isLink: true,
          link: '/'
        },
        {
          name: 'Data',
          isLink: false
        }
      ]
    };

    // breadcrumb slash
    this.breadcrumbSlash = {
      type: 'slash',
      links: [
        {
          name: 'Home',
          isLink: true,
          link: '/'
        },
        {
          name: 'Library',
          isLink: true,
          link: '/'
        },
        {
          name: 'Data',
          isLink: false
        }
      ]
    };

    // breadcrumb dots
    this.breadcrumbDots = {
      type: 'dots',
      links: [
        {
          name: 'Home',
          isLink: true,
          link: '/'
        },
        {
          name: 'Library',
          isLink: true,
          link: '/'
        },
        {
          name: 'Data',
          isLink: false
        }
      ]
    };

    // breadcrumb dashes
    this.breadcrumbDashes = {
      type: 'dashes',
      links: [
        {
          name: 'Home',
          isLink: true,
          link: '/'
        },
        {
          name: 'Library',
          isLink: true,
          link: '/'
        },
        {
          name: 'Data',
          isLink: false
        }
      ]
    };

    // breadcrumb pipes
    this.breadcrumbPipes = {
      type: 'pipes',
      links: [
        {
          name: 'Home',
          isLink: true,
          link: '/'
        },
        {
          name: 'Library',
          isLink: true,
          link: '/'
        },
        {
          name: 'Data',
          isLink: false
        }
      ]
    };

    // breadcrumb chevron
    this.breadcrumbChevron = {
      type: 'chevron',
      links: [
        {
          name: 'Home',
          isLink: true,
          link: '/'
        },
        {
          name: 'Library',
          isLink: true,
          link: '/'
        },
        {
          name: 'Data',
          isLink: false
        }
      ]
    };

    // breadcrumb left
    this.breadcrumbLeft = {
      links: [
        {
          name: 'Home',
          isLink: true,
          link: '/'
        },
        {
          name: 'Library',
          isLink: true,
          link: '/'
        },
        {
          name: 'Data',
          isLink: false
        }
      ]
    };

    // breadcrumb center
    this.breadcrumbCenter = {
      alignment: 'center',
      links: [
        {
          name: 'Home',
          isLink: true,
          link: '/'
        },
        {
          name: 'Library',
          isLink: true,
          link: '/'
        },
        {
          name: 'Data',
          isLink: false
        }
      ]
    };

    // breadcrumb right
    this.breadcrumbRight = {
      alignment: 'right',
      links: [
        {
          name: 'Home',
          isLink: true,
          link: '/'
        },
        {
          name: 'Library',
          isLink: true,
          link: '/'
        },
        {
          name: 'Data',
          isLink: false
        }
      ]
    };

    // content header
    this.contentHeader = {
      headerTitle: 'Breadcrumbs',
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
            name: 'Breadcrumbs',
            isLink: false
          }
        ]
      }
    };
  }
}
