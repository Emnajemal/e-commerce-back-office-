import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmailService } from 'app/main/apps/email/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'email-application' }
})
export class EmailComponent {
  /**
   *
   * @param {DOCUMENT} document
   * @param {ActivatedRoute} route
   * @param {EmailService} _emailService
   */
  constructor(@Inject(DOCUMENT) private document, private route: ActivatedRoute, private _emailService: EmailService) {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Update Search Text on QueryParams Change
    this.route.queryParams.subscribe(val => {
      this._emailService.updateSearchText(val.q);
    });
  }
}
