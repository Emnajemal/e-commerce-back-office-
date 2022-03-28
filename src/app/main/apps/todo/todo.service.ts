import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';

import { Todo } from './todo.model';

@Injectable()
export class TodoService implements Resolve<any> {
  // Public
  public todos: Todo[];
  public assignee;
  public filters;
  public tags;
  public tempTodos: Todo[];
  public currentTodo;
  public sortParamRef = 'id';

  public onTodoDataChange: BehaviorSubject<any>;
  public onCurrentTodoChange: BehaviorSubject<any>;
  public onAssigneeChange: BehaviorSubject<any>;
  public onFilterChange: BehaviorSubject<any>;
  public onTagChange: BehaviorSubject<any>;
  public onSearchQueryChange: BehaviorSubject<any>;
  public onFiltersChange: BehaviorSubject<any>;
  public onTagsChange: BehaviorSubject<any>;

  // Private
  private routeParams: any;
  private sortTodoRef = key => (a, b) => {
    let fieldA;
    let fieldB;

    // If sorting is by dueDate => Convert data to date
    if (key === 'dueDate') {
      fieldA = new Date(a[key]);
      fieldB = new Date(b[key]);
      // eslint-disable-next-line brace-style
    }

    // If sorting is by assignee => Use `fullName` of assignee
    else if (key === 'assignee') {
      fieldA = a.assignee ? a.assignee.fullName : null;
      fieldB = b.assignee ? b.assignee.fullName : null;
    } else {
      fieldA = a[key];
      fieldB = b[key];
    }

    let comparison = 0;

    if (fieldA === fieldB) {
      comparison = 0;
    } else if (fieldA === null) {
      comparison = 1;
    } else if (fieldB === null) {
      comparison = -1;
    } else if (fieldA > fieldB) {
      comparison = 1;
    } else if (fieldA < fieldB) {
      comparison = -1;
    }

    return comparison;
  };

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    this.onTodoDataChange = new BehaviorSubject({});
    this.onCurrentTodoChange = new BehaviorSubject({});
    this.onAssigneeChange = new BehaviorSubject({});
    this.onFilterChange = new BehaviorSubject({});
    this.onTagChange = new BehaviorSubject({});
    this.onSearchQueryChange = new BehaviorSubject({});
    this.onFiltersChange = new BehaviorSubject({});
    this.onTagsChange = new BehaviorSubject({});
  }

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    this.routeParams = route.params;
    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getTodosList(), this.getFilters(), this.getTags(), this.getAssignee()]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get Todos List
   *
   * @returns {Promise<Todo[]>}
   */
  getTodosList(): Promise<any[]> {
    if (this.routeParams.filter) {
      return this.getTodosByFilter(this.routeParams.filter);
    }

    if (this.routeParams.tag) {
      return this.getTodosByTag(this.routeParams.tag);
    }
  }

  /**
   * Get Filters
   */
  getFilters() {
    return new Promise<void>((resolve, reject) => {
      this._httpClient.get('api/todos-filters').subscribe((filters: any) => {
        this.filters = filters;
        this.onFiltersChange.next(this.filters);
        resolve();
      }, reject);
    });
  }

  /**
   * Get Tags
   */
  getTags() {
    return new Promise<void>((resolve, reject) => {
      this._httpClient.get('api/todos-tags').subscribe((tags: any) => {
        this.tags = tags;
        this.onTagsChange.next(this.tags);
        resolve();
      }, reject);
    });
  }

  /**
   * Get Todos By Filter
   *
   * @param filterHandel
   */
  getTodosByFilter(filterHandel): Promise<any[]> {
    let param;
    // Setup param for filter
    if (filterHandel === 'all') {
      param = 'deleted=false';
    } else if (filterHandel === 'deleted') {
      param = filterHandel + '=true';
    } else {
      param = filterHandel + '=true' + '&&deleted=false';
    }

    return new Promise((resolve, reject) => {
      this._httpClient.get('api/todos-data?' + param).subscribe((todos: any) => {
        this.todos = todos;
        this.tempTodos = todos;
        this.onTodoDataChange.next(this.todos);
        this.sortTodos(this.sortParamRef);
        resolve(this.todos);
      }, reject);
    });
  }

  /**
   * Get Todos By Tag
   *
   * @param tagHandel
   */
  getTodosByTag(tagHandel): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('api/todos-data?tags=' + tagHandel).subscribe((todos: any) => {
        this.todos = todos;
        this.tempTodos = todos;
        this.onTodoDataChange.next(this.todos);
        this.sortTodos(this.sortParamRef);
        resolve(this.todos);
      }, reject);
    });
  }

  /**
   * Get Todos Assignee
   *
   */
  getAssignee(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('api/todos-assignee').subscribe((assignee: any) => {
        this.assignee = assignee;
        this.onAssigneeChange.next(this.assignee);
        resolve(this.todos);
      }, reject);
    });
  }

  /**
   * Get Todos By Search
   *
   * @param query
   */
  getTodosBySearch(query) {
    const filteredTodos = this.tempTodos.filter(todo => {
      return todo.title.toLowerCase().includes(query.toLowerCase());
    });
    this.todos = filteredTodos;
    this.onTodoDataChange.next(this.todos);
    this.sortTodos(this.sortParamRef);
  }

  /**
   * Create New Todo
   */
  createNewTodo() {
    this.currentTodo = {};
    this.onCurrentTodoChange.next(this.currentTodo);
  }

  /**
   * Set Current Todo
   *
   * @param id
   */
  setCurrentTodo(id) {
    this.currentTodo = this.todos.find(todo => {
      return todo.id === id;
    });
    this.onCurrentTodoChange.next(this.currentTodo);
  }

  /**
   * Update Current Todo
   *
   * @param todo
   */
  updateCurrentTodo(todo) {
    if (todo.id === undefined) {
      this.currentTodo = todo;
      this.onCurrentTodoChange.next(this.currentTodo);
      this.postNewTodo();
    } else {
      this.currentTodo = todo;
      this.onCurrentTodoChange.next(this.currentTodo);
      this.postTodo();
    }
  }

  /**
   * Post Todo (Update Todo to fake-db)
   */
  postTodo() {
    return new Promise((resolve, reject) => {
      this._httpClient.post('api/todos-data/' + this.currentTodo.id, { ...this.currentTodo }).subscribe(response => {
        this.getTodosList().then(todos => {
          resolve(todos);
        }, reject);
      });
    });
  }

  /**
   * Post New Todo (Add Todo to fake-db)
   *
   * NOTE: In this POST request fakeDB will automatically assign a ID to new Object
   * Refer : https://stackoverflow.com/questions/50861850/id-should-be-optional-in-angular-in-memory-web-api
   */
  postNewTodo() {
    return new Promise((resolve, reject) => {
      this._httpClient.post('api/todos-data/', this.currentTodo).subscribe(response => {
        this.getTodosList().then(todos => {
          this.sortTodos(this.sortParamRef);
          resolve(todos);
        }, reject);
      });
    });
  }

  /**
   * Sort Todos
   *
   * @param sortByParam
   */
  sortTodos(sortByParam) {
    this.sortParamRef = sortByParam;
    let sortDesc = true;

    const sortBy = (() => {
      if (sortByParam === 'title-asc') {
        sortDesc = false;
        return 'title';
      }
      if (sortByParam === 'title-desc') return 'title';
      if (sortByParam === 'assignee') {
        sortDesc = false;
        return 'assignee';
      }
      if (sortByParam === 'due-date') {
        sortDesc = false;
        return 'dueDate';
      }
      return 'id';
    })();

    if (sortByParam !== null) {
      this.todos = this.todos.sort(this.sortTodoRef(sortBy));
      if (sortDesc) this.todos.reverse();

      this.onTodoDataChange.next(this.todos);
    }
  }
}
