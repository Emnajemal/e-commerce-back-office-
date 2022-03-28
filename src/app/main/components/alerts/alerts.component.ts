import { Component, OnInit } from '@angular/core';

import * as snippet from 'app/main/components/alerts/alerts.snippetcode';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html'
})
export class AlertsComponent implements OnInit {
  // public
  public contentHeader: object;
  public alertClose: boolean = false;
  public alertCustomClose: boolean = false;

  // snippet code variables
  public _snippetCodeDefault = snippet.snippetCodeDefault;
  public _snippetCodeTitle = snippet.snippetCodeTitle;
  public _snippetCodeColors = snippet.snippetCodeColors;
  public _snippetCodeClosableAlerts = snippet.snippetCodeClosableAlerts;
  public _snippetCodeIcon = snippet.snippetCodeColors;
  public _snippetCodeExample = snippet.snippetCodeExample;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    // content header
    this.contentHeader = {
      headerTitle: 'Alerts',
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
            name: 'Alerts',
            isLink: false
          }
        ]
      }
    };
  }
}
