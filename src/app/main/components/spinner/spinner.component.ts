import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as snippet from 'app/main/components/spinner/spinner.snippetcode';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SpinnerComponent implements OnInit {
  // public
  public contentHeader: object;

  // snippet code variables
  public _snippetCodeBorder = snippet.snippetCodeBorder;
  public _snippetCodeColored = snippet.snippetCodeColored;
  public _snippetCodeGrowing = snippet.snippetCodeGrowing;
  public _snippetCodeColoredGrowing = snippet.snippetCodeColoredGrowing;
  public _snippetCodeFlex = snippet.snippetCodeFlex;
  public _snippetCodeFloat = snippet.snippetCodeFloat;
  public _snippetCodeTextAlignment = snippet.snippetCodeTextAlignment;
  public _snippetCodeSizes = snippet.snippetCodeSizes;
  public _snippetCodeButtons = snippet.snippetCodeButtons;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'Spinner',
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
            name: 'Spinner',
            isLink: false
          }
        ]
      }
    };
  }
}
