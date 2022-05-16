import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { environment } from 'environments/environment';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    baseUrl=environment.apiUrl
    // Public
    public productList: Array<any>;
    public wishlist: Array<any>;
    public cartList: Array<any>;
    public selectedProduct;
    public relatedProducts;
  
    public onProductListChange: BehaviorSubject<any>;
    public onRelatedProductsChange: BehaviorSubject<any>;
    public onWishlistChange: BehaviorSubject<any>;
    public onCartListChange: BehaviorSubject<any>;
    public onSelectedProductChange: BehaviorSubject<any>;
  
    // Private
    private idHandel;
  
    private sortRef = key => (a, b) => {
      const fieldA = a[key];
      const fieldB = b[key];
  
      let comparison = 0;
      if (fieldA > fieldB) {
        comparison = 1;
      } else if (fieldA < fieldB) {
        comparison = -1;
      }
      return comparison;
    };
    onKBChanged: any;
  
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(private _httpClient: HttpClient) {
      this.onProductListChange = new BehaviorSubject({});
      this.onRelatedProductsChange = new BehaviorSubject({});
      this.onWishlistChange = new BehaviorSubject({});
      this.onCartListChange = new BehaviorSubject({});
      this.onSelectedProductChange = new BehaviorSubject({});
    }
  
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */



    //  getProducts(): Promise<any[]> {
    //   return new Promise((resolve, reject) => {
    //     this._httpClient.get('http://127.0.0.1:8000/api/store/get').subscribe((response: any) => {
    //       this.rows = response;
    //       console.log(this.rows)
    //       this.onKBChanged.next(this.rows);
    //       resolve(this.rows);
    //     }, reject);
    //   });
    // }
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
