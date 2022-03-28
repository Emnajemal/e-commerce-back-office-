import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { knowledgeBaseCategoryService } from 'app/main/pages/kb/knowledge-base-category/knowledge-base-category.service';

@Component({
  selector: 'app-knowledge-base-category',
  templateUrl: './knowledge-base-category.component.html',
  styleUrls: ['./knowledge-base-category.component.scss']
})
export class KnowledgeBaseCategoryComponent implements OnInit, OnDestroy {
  // public
  public contentHeader: object;
  public searchText: any;
  public url = this.router.url;
  public data: any;

  // private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {knowledgeBaseCategoryService} _knowledgeBaseCategoryService
   */
  constructor(private _knowledgeBaseCategoryService: knowledgeBaseCategoryService, private router: Router) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._knowledgeBaseCategoryService.onKBCategoryChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.data = response;
    });

    // content header
    this.contentHeader = {
      headerTitle: 'Category',
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
            name: 'Pages',
            isLink: true,
            link: '/'
          },
          {
            name: 'Knowledge Base',
            isLink: true,
            link: '/'
          },
          {
            name: 'Category',
            isLink: false
          }
        ]
      }
    };
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
