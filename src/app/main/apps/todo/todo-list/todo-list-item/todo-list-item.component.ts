import { Component, Input, OnInit } from '@angular/core';

import { Todo } from 'app/main/apps/todo/todo.model';
import { TodoService } from 'app/main/apps/todo/todo.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html'
})
export class TodoListItemComponent implements OnInit {
  // Input Decorator
  @Input() todo: Todo;

  // Public
  public selected;

  /**
   * Constructor
   *
   * @param {TodoService} _todoService
   */
  constructor(private _todoService: TodoService) {}

  /**
   *
   * @param stateRef
   */
  checkboxStateChange(stateRef) {
    this.todo.completed = stateRef;
    this._todoService.updateCurrentTodo(this.todo);
  }

  ngOnInit(): void {}
}
