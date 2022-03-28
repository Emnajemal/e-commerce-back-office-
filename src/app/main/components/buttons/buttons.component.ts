import { Component, OnInit } from '@angular/core';

import * as snippet from 'app/main/components/buttons/buttons.snippetcode';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent implements OnInit {
  // public
  public contentHeader: object;
  public radioModel = 1;
  public checkboxModel = {
    left: true,
    middle: false,
    right: false
  };

  // snippet code variables
  public _snippetCodeFilled = snippet.snippetCodeFilled;
  public _snippetCodeBorder = snippet.snippetCodeBorder;
  public _snippetCodeFlat = snippet.snippetCodeFlat;
  public _snippetCodeGradient = snippet.snippetCodeGradient;
  public _snippetCodeRelief = snippet.snippetCodeRelief;
  public _snippetCodeRoundbuttons = snippet.snippetCodeRoundbuttons;
  public _snippetCodeIcon = snippet.snippetCodeIcon;
  public _snippetCodeIconOnly = snippet.snippetCodeIconOnly;
  public _snippetCodeBasicButtongroup = snippet.snippetCodeBasicButtongroup;
  public _snippetCodeRadioButtonStyle = snippet.snippetCodeRadioButtonStyle;
  public _snippetCodeSizes = snippet.snippetCodeSizes;
  public _snippetCodeBlocklevelbuttons = snippet.snippetCodeBlocklevelbuttons;
  public _snippetCodeButtontags = snippet.snippetCodeButtontags;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  public show = false;
  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Buttons',
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
            name: 'Buttons',
            isLink: false
          }
        ]
      }
    };
  }
}
