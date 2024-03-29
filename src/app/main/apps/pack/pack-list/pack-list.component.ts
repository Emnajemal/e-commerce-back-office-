import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Pack from 'app/auth/models/pack';
import Product from 'app/auth/models/product';
import { Subject } from 'rxjs';
import { PackService } from '../pack.service';
import { PackformComponent } from '../packform/packform.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pack-list',
  templateUrl: './pack-list.component.html',
  styleUrls: ['./pack-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'ecommerce-application' }
})
export class PackListComponent implements OnInit {

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
  public packs: Pack[];

  public data: any;
  private _unsubscribeAll: Subject<any>;
  productId: number
  packId:number;
  formType:string;

  // nabaathha mel child lel parents out o l input l aakes
  @Output() onAddPack = new EventEmitter()
  // @Input() product:any;

  // <eccomerce (onAddProduct)= 'function()'></eccomerce>
  // (click)="function()"

  // <eccomerce [product]="value"></eccomerce>

  /**
   *
   * @param {CoreSidebarService} _coreSidebarService
   * @param {PackServicee} _PackService
   */
  constructor(private _coreSidebarService: CoreSidebarService, private fb: FormBuilder, private _PackService:PackService,
    private modalService: NgbModal) {
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
  //     this._PackService.pack(formdata).subscribe( (data: any) => {
  //       // data.image = `http://localhost:8000${data.image}`
  //      // this.products.push(data)
  //     this.onAddPack.emit()
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
   // this._PackService.sortProduct(sortParam);
  }


  //pop upp function
  modalOpenForm(modalForm,formType:string, event?: number) {
    // this.addproductSubmit();
    PackformComponent.prototype.formType=formType;
    console.log('pack id from open modal function ',event)
    this.packId = event
    this.formType = formType
    this.modalService.open(modalForm);
    console.log('pack id from open modal function ',this.packId)


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
    this.getPacks()
    // Subscribe to ProductList change

    // this._PackService.onProductListChange.subscribe(res => {
    //   this.products = res;
    //   this.products.isInWishlist = false;
    // });
    // this._PackService.onKBChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
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
    //this._PackService.onWishlistChange.subscribe(res => (this.wishlist = res));

    // Subscribe to Cartlist change
   // this._PackService.onCartListChange.subscribe(res => (this.cartList = res));

    // update product is in Wishlist & is in CartList : Boolean
    /*this.products.forEach(product => {
      product.isInWishlist = this.wishlist.findIndex(p => p.productId === product.id) > -1;
      product.isInCart = this.cartList.findIndex(p => p.productId === product.id) > -1;
    });*/

    // content header
    this.contentHeader = {
      headerTitle: 'Pack',
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
            name: 'Pack',
            isLink: false
          }
        ]
      }
    };
  }
  getPacks() {
    this._PackService.getPacks().subscribe((result: any) => {
     console.log(result)
      this.packs = result
   })
  }
  //hedhy tjibli l id mtaa product eli nheb nfaskhouu 
  getPackById(event: any,modal:any) {
    console.log('product id shop component ', event)
    //hatyna l id fel event hadheka 
    this.packId = event
    //neftah l modal
    this.modalService.open(modal,{centered: true})
    // this.deletePack(event)
  }
  //njib delete 
  deleteProduct(id: number) {
    //besh tfaskhli bel id hadheka 
    this._PackService.deletePack(id).subscribe((result: any) => {
      console.log(result)
      //o hne njbo data jdida
      this.getPacks()
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

