import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { DragulaModule } from 'ng2-dragula';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { QuillModule } from 'ngx-quill';

import { CoreSidebarModule } from '@core/components';
import { CoreCommonModule } from '@core/common.module';

import { TodoListComponent } from 'app/main/apps/todo/todo-list/todo-list.component';
import { TodoListItemComponent } from 'app/main/apps/todo/todo-list/todo-list-item/todo-list-item.component';
import { TodoMainSidebarComponent } from 'app/main/apps/todo/todo-sidebars/todo-main-sidebar/todo-main-sidebar.component';
import { TodoRightSidebarComponent } from 'app/main/apps/todo/todo-sidebars/todo-right-sidebar/todo-right-sidebar.component';

import { TodoComponent } from 'app/main/apps/todo/todo.component';
import { TodoService } from 'app/main/apps/todo/todo.service';

// routing
const routes: Routes = [
  {
    path: ':filter',
    component: TodoComponent,
    resolve: {
      data: TodoService
    }
  },
  {
    path: 'tag/:tag',
    component: TodoComponent,
    resolve: {
      data: TodoService
    }
  },
  {
    path: '**',
    redirectTo: 'all',
    data: { animation: 'todo' }
  }
];

@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoMainSidebarComponent,
    TodoRightSidebarComponent,
    TodoListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    CoreSidebarModule,
    QuillModule.forRoot(),
    NgSelectModule,
    DragulaModule.forRoot(),
    NgbModule,
    Ng2FlatpickrModule,
    PerfectScrollbarModule
  ],
  providers: [TodoService]
})
export class TodoModule {}
