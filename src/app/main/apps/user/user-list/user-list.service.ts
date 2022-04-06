import { User } from 'app/auth/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UserListService implements Resolve<any> {
  public rows: any;
  public onUserListChanged: BehaviorSubject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onUserListChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getDataTableRows()]).then(() => {
        resolve();
      }, reject);
    });
  }


  register(name:string, email:string, password:string, password_confirmation:string){
    const data={
      name:name,
      email:email,
      password:password,
      password_confirmation:password_confirmation,
    }
    return this._httpClient.post('http://127.0.0.1:8000/api/auth/register', data);
  }

  /**
   * Get rows
   */
  getDataTableRows(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('api/users-data').subscribe((response: any) => {
        this.rows = response;
        this.onUserListChanged.next(this.rows);
        resolve(this.rows);
      }, reject);
    });
  }
}
