import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { Todo } from 'app/main/apps/todo/todo.model';
import { TodoService } from 'app/main/apps/todo/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  // Public
  public todos: Todo[];

  /**
   * Constructor
   *
   * @param {TodoService} _todoService
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(
    private _dragulaService: DragulaService,
    private _todoService: TodoService,
    private _coreSidebarService: CoreSidebarService
  ) {
    // Drag And Drop With Handle
    _dragulaService.destroy('todo-tasks-drag-area');
    _dragulaService.createGroup('todo-tasks-drag-area', {
      moves: function (el, container, handle) {
        return handle.classList.contains('drag-icon');
      }
    });
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle Sidebar
   *
   * @param nameRef
   */
  toggleSidebar(nameRef): void {
    this._coreSidebarService.getSidebarRegistry(nameRef).toggleOpen();
  }

  /**
   * Update Sort
   *
   * @param sortRef
   */
  updateSort(sortRef) {
    this._todoService.sortTodos(sortRef);
  }

  /**
   * Update Query
   *
   * @param queryRef
   */
  updateQuery(queryRef) {
    this._todoService.getTodosBySearch(queryRef.target.value);
  }

  /**
   * Open Todo
   *
   * @param idRef
   */
  openTodo(idRef) {
    this._todoService.setCurrentTodo(idRef);
    this._coreSidebarService.getSidebarRegistry('todo-sidebar-right').toggleOpen();
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe Todos change
    this._todoService.onTodoDataChange.subscribe(response => (this.todos = response));
  }
}
