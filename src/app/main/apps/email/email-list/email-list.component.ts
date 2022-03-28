import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { Email } from 'app/main/apps/email/email.model';
import { EmailService } from 'app/main/apps/email/email.service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class EmailListComponent implements OnInit {
  // Public
  public emails: Email[];
  public hasSelectedMails;
  public isIndeterminate;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   *
   * @param {EmailService} _emailService
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private _emailService: EmailService, private _coreSidebarService: CoreSidebarService) {
    this._unsubscribeAll = new Subject();
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  /**
   * Toggle Select All
   */
  toggleSelectAll() {
    this._emailService.toggleSelectAll();
  }

  /**
   * Update Folder On Selected Emails
   *
   * @param folderRef
   */
  updateFolderOnSelectedMails(folderRef) {
    this._emailService.updateFolderOnSelectedEmails(folderRef);
  }

  /**
   * Updated Labels On Selected Emails
   *
   * @param labelRef
   */
  updateLabelOnSelectedEmails(labelRef) {
    this._emailService.updateLabelOnSelectedEmails(labelRef);
  }

  /**
   * Open Email
   *
   * @param id
   */
  openEmail(id) {
    this._emailService.openEmailDetails(id);
  }

  /**
   * Un-Read
   */
  unRead() {
    this._emailService.markAsUnread();
  }

  /**
   * Query Update
   *
   * @param queryValue
   */
  queryUpdate(queryValue) {
    this._emailService.updateSearchText(queryValue.target.value);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */

  ngOnInit(): void {
    // Subscribe to Selected Emails changes
    this._emailService.onSelectedEmailsChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(selectedMails => {
      setTimeout(() => {
        this.hasSelectedMails = selectedMails.length > 0;
        this.isIndeterminate = selectedMails.length !== this._emailService.emails.length && selectedMails.length > 0;
      }, 0);
    });

    // Subscribe to update Emails on changes
    this._emailService.onEmailsChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(emails => {
      this.emails = emails;
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
