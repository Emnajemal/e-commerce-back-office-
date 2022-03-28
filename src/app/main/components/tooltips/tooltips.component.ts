import { Component, OnInit, ViewChild } from '@angular/core';

import * as snippet from 'app/main/components/tooltips/tooltips.snippetcode';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html'
})
export class TooltipsComponent implements OnInit {
  // public
  public contentHeader: object;

  // snippet code variables
  public _snippetCodeTooltipPositions = snippet.snippetCodeTooltipPositions;
  public _snippetCodeTooltipTriggers = snippet.snippetCodeTooltipTriggers;
  public _snippetCodeTooltipOptions = snippet.snippetCodeTooltipOptions;
  public _snippetCodeTooltipMethods = snippet.snippetCodeTooltipMethods;
  public _snippetCodeTooltipEvents = snippet.snippetCodeTooltipEvents;

  @ViewChild('OpenEvent') OpenEvent;
  @ViewChild('OpenEventAfter') OpenEventAfter;
  @ViewChild('CloseEvent') CloseEvent;
  @ViewChild('CloseEventAfter') CloseEventAfter;

  constructor() {}

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  openEvent() {
    alert('Open event!');
    this.OpenEvent.open();
  }

  openEventAfter() {
    setTimeout(() => {
      alert('Opened After event!');
    }, 300);
    this.OpenEventAfter.open();
  }

  closeEvent() {
    alert('Close event!');
    this.CloseEvent.close();
  }

  closeEventAfter() {
    setTimeout(() => {
      alert('Closed After event!');
    }, 300);
    this.CloseEventAfter.close();
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'tooltips',
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
            name: 'tooltips',
            isLink: false
          }
        ]
      }
    };
  }
}
