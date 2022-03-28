import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as snippet from 'app/main/forms/form-elements/number-input/number-input.snippetcode';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NumberInputComponent implements OnInit {
  // public
  public contentHeader: object;

  public _snippetCodeTouchspin = snippet.snippetCodeTouchspin;
  public _snippetCodeSize = snippet.snippetCodeSize;
  public _snippetCodeMinMax = snippet.snippetCodeMinMax;
  public _snippetCodeStep = snippet.snippetCodeStep;
  public _snippetCodeColors = snippet.snippetCodeColors;

  public dateValue: number;

  constructor() {}

  /***
   * On touchspin count change
   */
  countChange(value) {
    // this.dateValue = value;
    console.log(value);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    // content header
    this.contentHeader = {
      headerTitle: 'Number Input',
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
            name: 'Form Elements',
            isLink: true,
            link: '/'
          },
          {
            name: 'Number Input',
            isLink: false
          }
        ]
      }
    };
  }
}
