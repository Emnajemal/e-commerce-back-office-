import { Component, OnInit, ViewChild } from '@angular/core';

import * as snippet from 'app/main/components/popovers/popovers.snippetcode';

@Component({
  selector: 'app-popovers',
  templateUrl: './popovers.component.html'
})
export class PopoversComponent implements OnInit {
  // public
  public contentHeader: object;

  // snippet code variables
  public _snippetCodePopoverPositions = snippet.snippetCodePopoverPositions;
  public _snippetCodePopoverTriggers = snippet.snippetCodePopoverTriggers;
  public _snippetCodePopoverOptions = snippet.snippetCodePopoverOptions;
  public _snippetCodePopoverMethods = snippet.snippetCodePopoverMethods;
  public _snippetCodePopoverEvents = snippet.snippetCodePopoverEvents;

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
      headerTitle: 'Popovers',
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
            name: 'Popovers',
            isLink: false
          }
        ]
      }
    };
  }
}
