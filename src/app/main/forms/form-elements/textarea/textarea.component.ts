import { Component, OnInit } from '@angular/core';
import * as snippet from 'app/main/forms/form-elements/textarea/textarea.snippetcode';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html'
})
export class TextareaComponent implements OnInit {
  // public
  public contentHeader: object;

  public _snippetCodeDefault = snippet.snippetCodeDefault;
  public _snippetCodeFloating = snippet.snippetCodeFloating;
  public _snippetCodeCounter = snippet.snippetCodeCounter;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    // content header
    this.contentHeader = {
      headerTitle: 'Textarea',
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
            name: 'Textarea',
            isLink: false
          }
        ]
      }
    };
  }
}
