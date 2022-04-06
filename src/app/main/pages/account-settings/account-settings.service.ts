import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
<<<<<<< Updated upstream
=======
import { AuthenticationService } from 'app/auth/service';
>>>>>>> Stashed changes
import { environment } from 'environments/environment';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AccountSettingsService implements Resolve<any> {
  rows: any;
  public userdata:any =JSON.parse(localStorage.getItem('currentUser'));

  onSettingsChanged: BehaviorSubject<any>;
  private ChangeUrl = 'http://127.0.0.1:8000/api/auth/change_password';
<<<<<<< Updated upstream
  private uploadUrl='http://127.0.0.1:8000/api/update/user/{id}';
=======
  private uploadUrl='http://127.0.0.1:8000/api/update/user/'+ this.userdata.id;
>>>>>>> Stashed changes

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onSettingsChanged =
     new BehaviorSubject({});
<<<<<<< Updated upstream
  }
  

   change(form){
      console.log("heloooo")
   return this._httpClient.post(this.ChangeUrl,form);
  }
  
=======
  }
  

   change(form){
      console.log("heloooo")
   return this._httpClient.post(this.ChangeUrl,form);
  }
  
>>>>>>> Stashed changes
  upload(uploadForm){
    return this._httpClient.post(this.uploadUrl,uploadForm);

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

  /**
   * Get rows
   */
  getDataTableRows(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('api/account-settings-data').subscribe((response: any) => {
        this.rows = response;
        this.onSettingsChanged.next(this.rows);
        resolve(this.rows);
      }, reject);
    });
  }
}
