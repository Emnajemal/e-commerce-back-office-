import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { environment } from 'environments/environment';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CardAnalyticsService implements Resolve<any> {
  rows: any;
  onCardAnalyticsChanged: BehaviorSubject<any>;
  baseUrl=environment.apiUrl

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onCardAnalyticsChanged = new BehaviorSubject({});
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
  expensiveProduct(){
    return this._httpClient.get(`${this.baseUrl}/api/chart/getcharttop5product`)
  }
  expensivePack(){
    return this._httpClient.get(`${this.baseUrl}/api/chart/getcharttop5pack`)
  }
  nombreProduct(){
    return this._httpClient.get(`${this.baseUrl}/api/chart/getchartProducts`)
  }
  nombrePack(){
    return this._httpClient.get(`${this.baseUrl}/api/chart/getchartPacks`)

  }
  nombrePromotion(){
    return this._httpClient.get(`${this.baseUrl}/api/chart/getchartPromotions`)

  }
  nombreStore(){
    return this._httpClient.get(`${this.baseUrl}/api/chart/getchartStores`)

  }
  nombreUser(){
    return this._httpClient.get(`${this.baseUrl}/api/chart/getchartUsers`)

  }
  nombreStock(){
    return this._httpClient.get(`${this.baseUrl}/api/chart/getchartStocks`)

  }
  nombreOrder(){
    return this._httpClient.get(`${this.baseUrl}/api/chart/getchartOrders`)

  }
  getGouvernerat(){
    return this._httpClient.get(`${this.baseUrl}/api/chart/getcharttop3`)

  }
  venduProduct(){
    return this._httpClient.get(`${this.baseUrl}/api/chart/getcharttop5vendu`)

  }
  dateOrder(){
    return this._httpClient.get(`${this.baseUrl}/api/chart/getchartdate`)

  }
  percentageOrder(){
    return this._httpClient.get(`${this.baseUrl}/api/chart/chartPercentage`)

  }
  /**
   * Get rows
   */
  getDataTableRows(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('api/card-analytics-data').subscribe((response: any) => {
        this.rows = response;
        this.onCardAnalyticsChanged.next(this.rows);
        resolve(this.rows);
      }, reject);
    });
  }
}
