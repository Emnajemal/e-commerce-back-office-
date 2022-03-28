import { Component, OnInit } from '@angular/core';

import * as snippet from 'app/main/forms/form-elements/input/input.snippetcode';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {
  // public
  public contentHeader: object;

  public _snippetCodeBasicInputs = snippet.snippetCodeBasicInputs;
  public _snippetCodeSizingOptions = snippet.snippetCodeSizingOptions;
  public _snippetCodeHorizontalFormLabelSizing = snippet.snippetCodeHorizontalFormLabelSizing;
  public _snippetCodeFloatingLabelInputs = snippet.snippetCodeFloatingLabelInputs;
  public _snippetCodeFileInput = snippet.snippetCodeFileInput;
  public _snippetCodeInputValidationStates = snippet.snippetCodeInputValidationStates;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    // content header
    this.contentHeader = {
      headerTitle: 'Input',
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
            name: 'Input',
            isLink: false
          }
        ]
      }
    };
  }
}
