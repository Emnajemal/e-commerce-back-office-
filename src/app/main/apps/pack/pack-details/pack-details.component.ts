import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'environments/environment';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { PackService } from '../pack.service';

@Component({
  selector: 'app-pack-details',
  templateUrl: './pack-details.component.html',
  styleUrls: ['./pack-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'ecommerce-application' }
})
export class PackDetailsComponent implements OnInit {

  public contentHeader: object;
  public pack;
  public wishlist;
  public cartList;
  public relatedProducts;
  baseUrl = environment.apiUrl


  // Swiper
  public swiperResponsive: SwiperConfigInterface = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  };

  /**
   * Constructor
   *
   * @param {EcommerceService} _ecommerceService
   */
  //l activate route heya eli tkhalini n'accedi lel haja eli ena feha taou tjib les paramt tjib route eli ahna aalih 
  //yjib les param mtaa route eli ena aalih taou 
  constructor(private activatedRoute:ActivatedRoute,private _PackService: PackService) {}

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle Wishlist
   *
   * @param product
   */
  toggleWishlist(product) {
    if (product.isInWishlist === true) {
      this._PackService.removeFromWishlist(product.id).then(res => {
        product.isInWishlist = false;
      });
    } else {
      this._PackService.addToWishlist(product.id).then(res => {
        product.isInWishlist = true;
      });
    }
  }

  /**
   * Add To Cart
   *
   * @param product
   */
  addToCart(product) {
    this._PackService.addToCart(product.id).then(res => {
      product.isInCart = true;
    });
  }
  getPackById(param){
    this._PackService.getPackById(param).subscribe((result:any)=>{
      console.log('pack details',result)
      this.pack=result;
      
    })
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    //njib l id eli majouda fel param (observable) o manajem nchuf eli fi westha ken ki namel subsribe o byh houaa nousel l ay produit bel id 
    this.activatedRoute.params.subscribe((param:any)=>{
      this.getPackById(param.id)
      console.log(param.id)
    })
    console.log(this.activatedRoute)
    // Subscribe to Selected Product change
    // this._ecommerceService.onSelectedProductChange.subscribe(res => {
    //   this.product = res[0];
    // });

    // Subscribe to Wishlist change
    this._PackService.onWishlistChange.subscribe(res => (this.wishlist = res));

    // Subscribe to Cartlist change
    this._PackService.onCartListChange.subscribe(res => (this.cartList = res));

    // Get Related Products
    this._PackService.getRelatedProducts().then(response => {
      this.relatedProducts = response;
    });

   // this.product.isInWishlist = this.wishlist.findIndex(p => p.productId === this.product.id) > -1;
   // this.product.isInCart = this.cartList.findIndex(p => p.productId === this.product.id) > -1;

    // content header
    this.contentHeader = {
      headerTitle: 'Product Details',
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
            isLink: true,
            link: '/'
          },
          {
            name: 'Details',
            isLink: false
          }
        ]
      }
    };
  }

}
