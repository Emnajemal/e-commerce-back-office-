import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BlogEditService } from 'app/main/pages/blog/blog-edit/blog-edit.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogEditComponent implements OnInit, OnDestroy {
  // Public
  public contentHeader: object;
  public data: any;
  public selectCategories: Observable<any[]>;
  public selectCategoriesSelected = ['Fashion'];
  public featuredImage: string;
  public fileName = undefined;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {BlogEditService} _blogEditService
   */
  constructor(private _blogEditService: BlogEditService) {
    this._unsubscribeAll = new Subject();
  }

  /**
   * Upload Image
   *
   * @param event
   */
  uploadImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.featuredImage = event.target.result;
      };

      this.fileName = event.target.files[0].name;
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On Changes
   */
  ngOnInit(): void {
    this._blogEditService.onBlogEditChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.data = response;
      this.featuredImage = this.data.blogEdit.featuredImage;
    });

    this.selectCategories = this.data.blogEdit.blogCategories;
    // Content Header
    this.contentHeader = {
      headerTitle: 'Blog Edit',
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
            name: 'Blog',
            isLink: true,
            link: '/'
          },
          {
            name: 'Edit',
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
