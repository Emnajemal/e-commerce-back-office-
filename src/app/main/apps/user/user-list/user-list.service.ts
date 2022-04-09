<<<<<<< Updated upstream
import { HttpClient } from '@angular/common/http';
=======
import { User } from 'app/auth/models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
>>>>>>> Stashed changes
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
}

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

<<<<<<< Updated upstream
=======

 /* register(name:string, email:string, password:string, password_confirmation:string){
    const data={
      name:name,
      email:email,
      password:password,
      password_confirmation:password_confirmation,
    }
    return this._httpClient.post('http://127.0.0.1:8000/api/auth/register', data);
  }
*/
private registerUrl = 'http://127.0.0.1:8000/api/auth/register';
register(data:any): Observable<any>{
  return this._httpClient.post(this.registerUrl,JSON.stringify(data), httpOptions)
}


deletetData(id:any){
  return this._httpClient.delete('http://127.0.0.1:8000/api/auth/deleteuser/'+id);
}


>>>>>>> Stashed changes
  /**
   * Get rows
   */
  getDataTableRows(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('http://127.0.0.1:8000/api/auth/user').subscribe((response: any) => {
        //console.log(response)
        this.rows = response;
        this.onUserListChanged.next(this.rows);
        resolve(this.rows);
      }, reject);
    });
  }
}
