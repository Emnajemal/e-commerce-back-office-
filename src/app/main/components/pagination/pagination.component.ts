import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as snippet from 'app/main/components/pagination/pagination.snippetcode';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PaginationComponent implements OnInit {
  // public
  public contentHeader: object;
  public pageBasic = 4;
  public pageBasicText = 3;
  public pageColor = 4;
  public pagePosition = 3;
  public pageSizes = 3;
  public pageAdvanced = 3;
  public pageAdvancedLink = 3;
  public pageAdvancedEllipses = 7;
  public pageAdvancedNoEllipses = 8;

  // snippet code variables
  public _snippetCodeBasic = snippet.snippetCodeBasic;
  public _snippetCodeIconText = snippet.snippetCodeIconText;
  public _snippetCodeOnlyIcons = snippet.snippetCodeOnlyIcons;
  public _snippetCodeSuccess = snippet.snippetCodeSuccess;
  public _snippetCodeDanger = snippet.snippetCodeDanger;
  public _snippetCodeInfo = snippet.snippetCodeInfo;
  public _snippetCodeWarning = snippet.snippetCodeWarning;
  public _snippetCodePositions = snippet.snippetCodePositions;
  public _snippetCodeSizes = snippet.snippetCodeSizes;
  public _snippetCodeAdvanceDefault = snippet.snippetCodeAdvanceDefault;
  public _snippetCodeDefaultlLastFirst = snippet.snippetCodeDefaultlLastFirst;
  public _snippetCodeEllipsesRotation = snippet.snippetCodeEllipsesRotation;
  public _snippetCodeRotatioNoEllipses = snippet.snippetCodeRotatioNoEllipses;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'Pagination',
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
            name: 'Pagination',
            isLink: false
          }
        ]
      }
    };
  }
}
