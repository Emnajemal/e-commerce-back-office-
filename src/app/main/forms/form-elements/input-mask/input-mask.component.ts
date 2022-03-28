import { Component, OnInit } from '@angular/core';

import * as snippet from 'app/main/forms/form-elements/input-mask/input-mask.snippetcode';

@Component({
  selector: 'app-input-mask',
  templateUrl: './input-mask.component.html'
})
export class InputMaskComponent implements OnInit {
  // public
  public contentHeader: object;
  public _snippetCodeCredit = snippet.snippetCodeCredit;
  public _snippetCodePhone = snippet.snippetCodePhone;
  public _snippetCodeDate = snippet.snippetCodeDate;
  public _snippetCodeTime = snippet.snippetCodeTime;
  public _snippetCodeNumeral = snippet.snippetCodeNumeral;
  public _snippetCodeSecure = snippet.snippetCodeSecure;
  public _snippetCodePrefix = snippet.snippetCodePrefix;
  public _snippetCodeSuffix = snippet.snippetCodeSuffix;
  public _snippetCodeBlocks = snippet.snippetCodeBlocks;
  public _snippetCodeDelimiters = snippet.snippetCodeDelimiters;

  constructor() {}

  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'Input Mask',
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
            name: 'Input Mask',
            isLink: false
          }
        ]
      }
    };
  }
}
