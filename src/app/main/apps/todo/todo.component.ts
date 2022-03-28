import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'todo-application' }
})
export class TodoComponent {}
