import { Component, OnInit } from '@angular/core';

import * as snippet from 'app/main/components/media-objects/media-objects.snippetcode';

@Component({
  selector: 'app-media-objects',
  templateUrl: './media-objects.component.html'
})
export class MediaObjectsComponent implements OnInit {
  // public
  public contentHeader: object;

  // snippet code variables
  public _snippetCodeLeftAligned = snippet.snippetCodeLeftAligned;
  public _snippetCodeRightAligned = snippet.snippetCodeRightAligned;
  public _snippetCodeLeftAlignedBordered = snippet.snippetCodeLeftAlignedBordered;
  public _snippetCodeBordered = snippet.snippetCodeBordered;
  public _snippetCodeNested = snippet.snippetCodeNested;
  public _snippetCodeAlignedLeft = snippet.snippetCodeAlignedLeft;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'Media Objects',
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
            name: 'Media Objects',
            isLink: false
          }
        ]
      }
    };
  }
}
