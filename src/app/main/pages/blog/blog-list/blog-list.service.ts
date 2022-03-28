import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class BlogListService implements Resolve<any> {
  // Public
  public apiData: any;
  public onBlogListChanged: BehaviorSubject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onBlogListChanged = new BehaviorSubject({});
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
      Promise.all([this.getData()]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get Data
   */
  getData(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('api/blog-data').subscribe((response: any) => {
        this.apiData = response;
        this.onBlogListChanged.next(this.apiData);
        resolve(this.apiData);
      }, reject);
    });
  }
}
