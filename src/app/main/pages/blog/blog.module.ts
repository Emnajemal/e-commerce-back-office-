import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { QuillModule } from 'ngx-quill';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { AuthGuard } from 'app/auth/helpers';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { BlogDetailComponent } from 'app/main/pages/blog/blog-detail/blog-detail.component';
import { BlogDetailService } from 'app/main/pages/blog/blog-detail/blog-detail.service';
import { BlogEditComponent } from 'app/main/pages/blog/blog-edit/blog-edit.component';
import { BlogEditService } from 'app/main/pages/blog/blog-edit/blog-edit.service';
import { BlogListComponent } from 'app/main/pages/blog/blog-list/blog-list.component';
import { BlogListService } from 'app/main/pages/blog/blog-list/blog-list.service';

const routes: Routes = [
  {
    path: 'blog-list',
    component: BlogListComponent,
    canActivate: [AuthGuard],
    resolve: {
      kbq: BlogListService
    },
    data: { animation: 'list' }
  },
  {
    path: 'blog-details/:id',
    component: BlogDetailComponent,
    canActivate: [AuthGuard],
    resolve: {
      kbq: BlogDetailService
    },
    data: { animation: 'details' }
  },
  {
    path: 'blog-edit',
    component: BlogEditComponent,
    canActivate: [AuthGuard],
    resolve: {
      kbq: BlogEditService
    },
    data: { animation: 'edit' }
  },
  {
    path: 'blog-details',
    redirectTo: '/pages/blog-details/2' //Redirection
  }
];

@NgModule({
  declarations: [BlogListComponent, BlogEditComponent, BlogDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ContentHeaderModule,
    CoreCommonModule,
    QuillModule.forRoot(),
    NgSelectModule,
    FormsModule,
    NgbModule
  ],

  providers: [BlogListService, BlogDetailService, BlogEditService]
})
export class BlogModule {}
