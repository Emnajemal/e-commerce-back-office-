import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Email } from 'app/main/apps/email/email.model';
import { EmailService } from 'app/main/apps/email/email.service';

@Component({
  selector: 'email-list-item',
  templateUrl: './email-list-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class EmailListItemComponent implements OnInit {
  // Public
  public selected;

  // Private
  private _unsubscribeAll: Subject<any>;

  // Input Decorator
  @Input() email: Email;

  /**
   *
   * @param {EmailService} _emailService
   */
  constructor(private _emailService: EmailService) {
    this._unsubscribeAll = new Subject();
  }

  /**
   * On Checkbox Change
   */
  onSelectedChange() {
    this._emailService.toggleSelectedMail(this.email.id);
  }

  /**
   * Toggle Starred
   */
  toggleStarred() {
    this._emailService.toggleStarred(this.email);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to update on selected email change
    this._emailService.onSelectedEmailsChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(selectedMails => {
      this.selected = false;

      if (selectedMails.length > 0) {
        for (const email of selectedMails) {
          if (email.id === this.email.id) {
            this.selected = true;
            break;
          }
        }
      }
    });
  }

  /**
   * On destroy
   */

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
