import { Component, OnInit } from '@angular/core';

import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { TodoService } from 'app/main/apps/todo/todo.service';

@Component({
  selector: 'app-todo-main-sidebar',
  templateUrl: './todo-main-sidebar.component.html'
})
export class TodoMainSidebarComponent implements OnInit {
  // Public
  public filters: Array<{}>;
  public tags: Array<{}>;

  /**
   * Constructor
   *
   * @param {TodoService} _todoService
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(private _coreSidebarService: CoreSidebarService, private _todoService: TodoService) {}

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle Sidebar
   *
   * @param nameRef
   */
  createNewTodo(nameRef, closeNameRef): void {
    this._coreSidebarService.getSidebarRegistry(nameRef).toggleOpen();
    this._coreSidebarService.getSidebarRegistry(closeNameRef).toggleOpen();
    this._todoService.createNewTodo();
  }

  /**
   * Toggle Sidebar
   *
   * @param nameRef
   */
  toggleSidebar(nameRef): void {
    this._coreSidebarService.getSidebarRegistry(nameRef).toggleOpen();
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {
    this._todoService.onFiltersChange.subscribe(response => (this.filters = response));
    this._todoService.onTagsChange.subscribe(response => (this.tags = response));
  }
}
