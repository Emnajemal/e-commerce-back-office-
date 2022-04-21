import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import Store from 'app/auth/models/store';
import { environment } from 'environments/environment';

import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class knowledgeBaseService implements Resolve<any> {
  rows: any;
  onKBChanged: BehaviorSubject<any>;
  private boutiqueUrl='http://127.0.0.1:8000/api/store/add';

baseUrl=environment.apiUrl

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onKBChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */

   boutique(addForm){
    console.log(addForm);
    return this._httpClient.post(this.boutiqueUrl,addForm);

  }
   deletetData(id){
    return this._httpClient.delete(`${this.baseUrl}/api/store/delete/`+id);

  }
  
 /* updateshop(store: Store): Observable<Store> {
    return this._httpClient.put<Store>(this.storeUrl, store, httpOptions)
      .pipe(
        catchError(this.handleError('updateHero', store))
      );
  }
  handleError(arg0: string, store: Store): any {
    throw new Error('Method not implemented.');
  }*/

  updateshop(id:any , store:any){
    console.log(store);

    return this._httpClient.post('http://127.0.0.1:8000/api/store/update/'+id, store);

  }
  

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
      this._httpClient.get('http://127.0.0.1:8000/api/store/get').subscribe((response: any) => {
        this.rows = response;
        this.onKBChanged.next(this.rows);
        resolve(this.rows);
      }, reject);
    });
  }
}
function httpOptions<T>(storeUrl: string, store: Store, httpOptions: any) {
  throw new Error('Function not implemented.');
}

