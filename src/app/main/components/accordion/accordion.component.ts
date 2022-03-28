import { Component, OnInit } from '@angular/core';

import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

import * as snippet from 'app/main/components/accordion/accordion.snippetcode';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html'
})
export class AccordionComponent implements OnInit {
  // private
  private lastPanelId: string = null;
  private defaultPanelId: string = 'panelShadow2';

  // public
  public contentHeader: object;

  // snippet code variables
  public _snippetCodeAccordion = snippet.snippetCodeAccordion;
  public _snippetCodeShadow = snippet.snippetCodeShadow;
  public _snippetCodeBorder = snippet.snippetCodeBorder;
  public _snippetCodeMargin = snippet.snippetCodeMargin;

  constructor() {}

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Accordion with shadow
   *
   * onPanelChange
   *
   * @param {NgbPanelChangeEvent} $event
   * @param panelShadow
   */
  onPanelChange($event: NgbPanelChangeEvent, panelShadow) {
    const activePanelId = $event.panelId;
    const activePanelElem = document.getElementById(activePanelId);

    if (!panelShadow.isExpanded(activePanelId)) {
      activePanelElem.parentElement.classList.add('open');
    }

    if (!this.lastPanelId) this.lastPanelId = this.defaultPanelId;

    if (this.lastPanelId) {
      const lastPanelElem = document.getElementById(this.lastPanelId);

      if (this.lastPanelId === activePanelId && $event.nextState === false)
        activePanelElem.parentElement.classList.remove('open');
      else if (this.lastPanelId !== activePanelId && $event.nextState === true) {
        lastPanelElem.parentElement.classList.remove('open');
      }
    }

    this.lastPanelId = activePanelId;
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'Accordion',
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
            name: 'Accordion',
            isLink: false
          }
        ]
      }
    };
  }
}
