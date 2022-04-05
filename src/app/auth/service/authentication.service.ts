import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { User, Role } from 'app/auth/models';
import { ToastrService } from 'ngx-toastr';



@Injectable({ providedIn: 'root' })



export class AuthenticationService {

  //public
  public currentUser: Observable<User>;

  //private
  private currentUserSubject: BehaviorSubject<User>;

  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   */
  constructor(private _http: HttpClient, private _toastrService: ToastrService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  // getter: currentUserValue
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  /**
   *  Confirms if user is admin
   */

  get isAdmin() {
    return this.currentUser && this.currentUserSubject.value.role === Role.Admin;
  }

  /**
   *  Confirms if user is client
   */
  get isClient() {
    return this.currentUser && this.currentUserSubject.value.role === Role.Client;
  }

  /**
   * User login
   *
   * @param email
   * @param password
   * @returns user
   */
  login(email: string, password: string) {
    return this._http
      .post<any>(`${environment.apiUrl}/api/auth/login`, { email, password })
      .pipe(
        map(payload => {
          // login successful if there's a jwt token in the response
          // console.log('onlogin',user)
          let user = payload.user
          user = { ...user, token: payload.access_token, first_name: user.name }
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));

            // Display welcome toast!
            setTimeout(() => {
              this._toastrService.success(
                'You have successfully logged in as an ' +
                user.role +
                ' user to Vuexy. Now you can start to explore. Enjoy! 🎉',
                '👋 Welcome, ' + user.firstName + '!',
                { toastClass: 'toast ngx-toastr', closeButton: true }
              );
            }, 2500);

            // notify
            this.currentUserSubject.next(user);
          }

          return user;
        })
      );
  }

  forgot(email: string) {
    return this._http.post('http://127.0.0.1:8000/api/auth/forgot', { email: email });
  }

  /*reset(token:string,password:string,password_confirmation:string){
   const data={
token:token,
password:password,
password_confirmation:password_confirmation
    }
    return this._http.post('http://127.0.0.1:8000/api/auth/reset',data); 
  }
*/
  // Reset Pass
  reset(token: string, password: string, password_confirmation: string) {

   const data = {
      token: token,
      password: password,
      password_confirmation: password_confirmation
    }
    return this._http.post('http://127.0.0.1:8000/api/auth/reset',data);
  }
  /**
   * User logout
   *
   */
 /* removeToken (){
    window.localStorage.removeItem(this.TOKEN_KEY);
  }*/
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  
    // notify
    this.currentUserSubject.next(null);
    //zeyda
    localStorage.removeItem('token');
    console.log("user did logout successfully");

  }


 /* logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // notify
    this.currentUserSubject.next(null);
    //zyda
    const user: any = localStorage.getItem('user');
    const userObj = JSON.parse(user);

    const token = userObj.token;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
   return this._http.post('http://127.0.0.1:8000/api/auth/logout', {headers:headers});
  }*/
}
