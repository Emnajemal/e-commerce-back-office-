import { Component, OnInit } from '@angular/core';

import * as snippet from 'app/main/components/dropdowns/dropdowns.snippetcode';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent implements OnInit {
  // public
  public contentHeader: object;

  // snippet code variables
  public _snippetCodeBasic = snippet.snippetCodeBasic;
  public _snippetCodeSplitDropdowns = snippet.snippetCodeSplitDropdowns;
  public _snippetCodeOutline = snippet.snippetCodeOutline;
  public _snippetCodeFlat = snippet.snippetCodeFlat;
  public _snippetCodeGradient = snippet.snippetCodeGradient;
  public _snippetCodeSizes = snippet.snippetCodeSizes;
  public _snippetCodeDirections = snippet.snippetCodeDirections;
  public _snippetCodeVariations = snippet.snippetCodeVariations;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'Dropdowns',
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
            name: 'Dropdowns',
            isLink: false
          }
        ]
      }
    };
  }
}
