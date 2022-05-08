import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'app/main/components/toasts/toasts.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-pack-item',
  templateUrl: './pack-item.component.html',
  styleUrls: ['./pack-item.component.scss']
})
export class PackItemComponent implements OnInit {

  @Input() pack;
  @Input() isWishlistOpen = false;
  @Output() onOpenModel = new EventEmitter()
  @Output() onDelete = new EventEmitter()

  // Public
  public isInCart = false;
  public image: string;
  editForm: FormGroup;
  baseUrl = environment.apiUrl


  /**
   *
   * @param {PackService} _PackService
   */
  constructor(private modalService: NgbModal,public toastService: ToastService) {}

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle Wishlist
   *
   * @param product
   */
  toggleWishlist(product) {
    if (product.isInWishlist === true) {
      // this._PackService.removeFromWishlist(product.id).then(res => {
      //   product.isInWishlist = false;
      // });
    } else {
      // this._PackService.addToWishlist(product.id).then(res => {
      //   product.isInWishlist = true;
      // });
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
    // this._PackService.addToCart(product.id).then(res => {
    //   product.isInCart = true;
    // });
  }
  editProduct(packId:number){
    console.log('pack id from pack item ',packId)
    this.onOpenModel.emit(packId)
  }
  //lhaja hedhy heya eli torbtli mabin l item o shop o tekhou l id o on deleteproduct heya eli tobit binethom zouz 
  deleteProduct(packId:number){
      this.onDelete.emit(packId)
   
  }
  // toastBasic(data, delayTime) {
  //   console.log("nhebeek")
  //   this.toastService.show(data, {
  //     delay: delayTime,
  //     autohide: true
  //   });
  // }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  ngOnInit(): void {}



}
