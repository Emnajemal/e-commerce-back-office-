import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EcommerceService } from 'app/main/apps/ecommerce/ecommerce.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-ecommerce-item',
  templateUrl: './ecommerce-item.component.html',
  styleUrls: ['./ecommerce-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'ecommerce-application' }
})
export class EcommerceItemComponent implements OnInit {
  // Input Decorotor
  @Input() product;
  @Input() isWishlistOpen = false;
  @Output() onOpenModel = new EventEmitter()
  @Output() onDeleteProduct = new EventEmitter()

  // Public
  public isInCart = false;
  public image: string;
  editForm: FormGroup;
  baseUrl = environment.apiUrl


  /**
   *
   * @param {EcommerceService} _ecommerceService
   */
  constructor(private _ecommerceService: EcommerceService , private modalService: NgbModal) {}

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle Wishlist
   *
   * @param product
   */
  toggleWishlist(product) {
    if (product.isInWishlist === true) {
      this._ecommerceService.removeFromWishlist(product.id).then(res => {
        product.isInWishlist = false;
      });
    } else {
      this._ecommerceService.addToWishlist(product.id).then(res => {
        product.isInWishlist = true;
      });
    }
  }
  editImage(event: any) {

    if (event.target.files && event.target.files[0]) {

      this.editForm.get('image').setValue(event.target.files[0]);

      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.image = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }


  /**
   * Add To Cart
   *
   * @param product
   */
  addToCart(product) {
    this._ecommerceService.addToCart(product.id).then(res => {
      product.isInCart = true;
    });
  }
  editProduct(productId:number){
    this.onOpenModel.emit(productId)
  }
  //lhaja hedhy heya eli torbtli mabin l item o shop o tekhou l id o on deleteproduct heya eli tobit binethom zouz 
  deleteProduct(productId:number){
      this.onDeleteProduct.emit(productId)
   
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  ngOnInit(): void {}
}
