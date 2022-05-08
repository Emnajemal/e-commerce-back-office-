import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import Store from 'app/auth/models/store';
import { environment } from 'environments/environment';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

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
  getDataTableRows(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('http://127.0.0.1:8000/api/store/get').subscribe((response: any) => {
        this.rows = response;
        console.log(this.rows)
        this.onKBChanged.next(this.rows);
        resolve(this.rows);
      }, reject);
    });
  }

  getProducts(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('http://127.0.0.1:8000/api/product/products').subscribe((response: any) => {
        this.rows = response;
        console.log(this.rows)
        this.onKBChanged.next(this.rows);
        resolve(this.rows);
      }, reject);
    });
  }
  // getProducts(){
  //   return this._httpClient.get(`${this.baseUrl}/api/product/products`)
  //   // return new Promise((resolve, reject) => {
  //   //   this._httpClient.get('api/ecommerce-products').subscribe((response: any) => {
  //   //     this.productList = response;
  //   //     this.sortProduct('featured'); // Default shorting
  //   //     resolve(this.productList);
  //   //   }, reject);
  //   // });
  // }
}
