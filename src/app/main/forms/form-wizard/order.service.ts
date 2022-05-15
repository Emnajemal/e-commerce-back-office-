import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
export class OrderService {

  constructor(private _httpClient: HttpClient) { }


 /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */

  private registerUrl = 'http://127.0.01:8000/api/order/addorder';
  register(data:any): Observable<any>{
    console.log(data)
   return this._httpClient.post(this.registerUrl,data)
   
  }



} 
