import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Product from 'app/auth/models/product';

import { EcommerceService } from 'app/main/apps/ecommerce/ecommerce.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
  // nabaathha mel child lel parents out o l input l aakes
  @Output() onAddProduct = new EventEmitter()
  // @Input() product:any;

  // <eccomerce (onAddProduct)= 'function()'></eccomerce>
  // (click)="function()"

  // <eccomerce [product]="value"></eccomerce>

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
  //add product 
  // addproductSubmit() {
  //   this.submitted = true;
  //   if (this.addForm.invalid) {
  //     return;
  //   }
  //   let formdata = new FormData();
  //   data: Product;

  //   if (this.addForm.value.image) {
  //     formdata.append('image', this.addForm.value.image);
  //     console.log(this.addForm.value.image);
  //   }
  //   formdata.append('name', this.addForm.value.name);
  //     console.log(this.addForm.value.name);
  //   formdata.append('reference', this.addForm.value.reference);
  //   formdata.append('pricesupplier', this.addForm.value.pricesupplier);
  //   formdata.append('sellingprice', this.addForm.value.sellingprice);
  //   formdata.append('gain', this.addForm.value.gain);
  //   formdata.append('status', this.addForm.value.status);
  //   formdata.append('description', this.addForm.value.description);
  //     this._ecommerceService.boutique(formdata).subscribe( (data: any) => {
  //       // data.image = `http://localhost:8000${data.image}`
  //      // this.products.push(data)
  //     this.onAddProduct.emit()
  //       console.log(data)

  //     }
  //   )
  // }
  // fin add product





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
  //toufaa houni delete



  //imaaageeeeeeeeeeeeeeee
  //  uploadImage(event: any) {

  //   if (event.target.files && event.target.files[0]) {

  //     this.addForm.get('image').setValue(event.target.files[0]);

  //     let reader = new FileReader();

  //     reader.onload = (event: any) => {
  //       this.image = event.target.result;
  //     };
  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // }
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.getProducts()
    // Subscribe to ProductList change

    // this._ecommerceService.onProductListChange.subscribe(res => {
    //   this.products = res;
    //   this.products.isInWishlist = false;
    // });
    // this._ecommerceService.onKBChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
    //   this.data = response;
    // });


    // this.addForm = this.fb.group({
    //   name: ['', Validators.required],
    //   reference: ['', Validators.required],
    //   status: ['', Validators.required],
    //   sellingprice: ['', Validators.required],
    //   pricesupplier: ['', Validators.required],
    //   gain: ['', Validators.required],
    //   description: ['', Validators.required],
    //   image: [null],
    // })

    // Subscribe to Wishlist change
    this._ecommerceService.onWishlistChange.subscribe(res => (this.wishlist = res));

    // Subscribe to Cartlist change
    this._ecommerceService.onCartListChange.subscribe(res => (this.cartList = res));

    // update product is in Wishlist & is in CartList : Boolean
    /*this.products.forEach(product => {
      product.isInWishlist = this.wishlist.findIndex(p => p.productId === product.id) > -1;
      product.isInCart = this.cartList.findIndex(p => p.productId === product.id) > -1;
    });*/

    // content header
    this.contentHeader = {
      headerTitle: 'Shop',
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
            name: 'Shop',
            isLink: false
          }
        ]
      }
    };
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
    this.modalService.open(modal)
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
    })
  }
}
