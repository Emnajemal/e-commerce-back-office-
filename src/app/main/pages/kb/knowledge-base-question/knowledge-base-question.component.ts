import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { knowledgeBaseQuestionService } from 'app/main/pages/kb/knowledge-base-question/knowledge-base-question.service';

@Component({
  selector: 'app-knowledge-base-question',
  templateUrl: './knowledge-base-question.component.html',
  styleUrls: ['./knowledge-base-question.component.scss']
})
export class KnowledgeBaseQuestionComponent implements OnInit, OnDestroy {
  // public
  public contentHeader: object;
  public data: any;

  // private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {knowledgeBaseCategoryService} _knowledgeBaseCategoryService
   */
  constructor(private _knowledgeBaseCategoryService: knowledgeBaseQuestionService) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._knowledgeBaseCategoryService.onKBQuestionChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.data = response;
    });

    // content header
    this.contentHeader = {
      headerTitle: 'Question',
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
            isLink: true,
            link: '/'
          },
          {
            name: 'Question',
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
