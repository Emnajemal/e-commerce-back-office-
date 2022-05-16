import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Product from 'app/auth/models/product';
import Promotion from 'app/auth/models/promotion';

import { EcommerceService } from 'app/main/apps/ecommerce/ecommerce.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ecommerce-shop',
  templateUrl: './ecommerce-shop.component.html',
  styleUrls: ['./ecommerce-shop.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'ecommerce-application' }
})
export class EcommerceShopComponent implements OnInit {
  // public
  public contentHeader: object;
  public shopSidebarToggle = false;
  public shopSidebarReset = false;
  public gridViewRef = true;
  // public products;
  public wishlist;
  public cartList;
  public page = 1;
  public pageSize = 9;
  public searchText = '';
  addForm: FormGroup;
  public image: string;
  public submitted = false;
  public products: Product[];
  public data: any;
  private _unsubscribeAll: Subject<any>;
  productId: number
  public promotion: Promotion[];
  // nabaathha mel child lel parents out o l input l aakes
  @Output() onAddProduct = new EventEmitter()
  @Output() onAddPromtion = new EventEmitter()
 

  /**
   *
   * @param {CoreSidebarService} _coreSidebarService
   * @param {EcommerceService} _ecommerceService
   */
  constructor(private _coreSidebarService: CoreSidebarService, private fb: FormBuilder,
    private _ecommerceService: EcommerceService, private modalService: NgbModal) {
    this._unsubscribeAll = new Subject();

  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle Sidebar
   *
   * @param name
   */


  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  /**
   * Update to List View
   */
  listView() {
    this.gridViewRef = false;
  }

  /**
   * Update to Grid View
   */
  gridView() {
    this.gridViewRef = true;
  }

  /**
   * Sort Product
   */
  sortProduct(sortParam) {
    this._ecommerceService.sortProduct(sortParam);
  }


  //pop upp function
  modalOpenForm(modalForm, event?: number) {
    // this.addproductSubmit();
    console.log(event)
    this.productId = event
    this.modalService.open(modalForm);

  }
  //cofirmation delete
  modalOpenDanger(modalDanger) {
    this.modalService.open(modalDanger, {
      centered: true,
      windowClass: 'modal modal-danger'
    });
  }

  //nfasakh product 
  deleteproductSubmit() {

  }
 // modal Open Warning
modalOpenWarning(modalWarning) {
  this.modalService.open(modalWarning, {
    centered: true,
    windowClass: 'modal modal-warning'
  });
  }
  //toufaa houni delete

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.getProducts()
   

    // Subscribe to Wishlist change
    this._ecommerceService.onWishlistChange.subscribe(res => (this.wishlist = res));

    // Subscribe to Cartlist change
    this._ecommerceService.onCartListChange.subscribe(res => (this.cartList = res));


    // content header
    this.contentHeader = {
      headerTitle: 'Product',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'eCommerce',
            isLink: true,
            link: '/'
          },
          {
            name: 'Product',
            isLink: false
          }
        ]
      }
    };
  }
  getPromotions(){
    this._ecommerceService.getPromotions().subscribe((data: any) => {
      this.promotion=data;
      
    })
  }
  getProducts() {
    this._ecommerceService.getProducts().subscribe((result: any) => {
      console.log(result)
      this.products = result
    })
  }
  //hedhy tjibli l id mtaa product eli nheb nfaskhouu 
  getProductId(event: any,modal:any) {
    console.log('product id shop component ', event)
    //hatyna l id fel event hadheka 
    this.productId = event
    //neftah l modal
    this.modalService.open(modal,{centered: true})

    // this.deleteProduct(event)
  }
  //njib delete 
  deleteProduct(id: number) {
    //besh tfaskhli bel id hadheka 
    this._ecommerceService.deleteProduct(id).subscribe((result: any) => {
      console.log(result)
      //o hne njbo data jdida
      this.getProducts()
      this.modalService.dismissAll()
      Swal.fire({
        title: "Deleted!",
        icon:"success",
       // imageUrl: result.value.avatar_url,
        customClass: { confirmButton: 'btn btn-success' }
      });
    })
  }
}
