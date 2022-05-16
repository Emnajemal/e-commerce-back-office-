import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import Product from 'app/auth/models/product';
import { EcommerceService } from '../ecommerce.service';
import { environment } from 'environments/environment';
import Promotion from 'app/auth/models/promotion';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class PromotionComponent implements OnInit {
  promotionForm: FormGroup;
  image: string;
  success: boolean;
  formData: FormData = new FormData()
  submitted = false;
  public promotion: Promotion[];
  
  public customFooterDPdata: NgbDateStruct;

  public products: Observable<any[]>;
  public selectedProducts: any = []
  baseUrl: string = environment.apiUrl

  @Output() onAddPromtion = new EventEmitter()


  constructor(private _ecommerceService: EcommerceService, private fb: FormBuilder, private modalService: NgbModal, private toastr: ToastrService) { }
  get f() { return this.promotionForm.controls; }

  addpromotionSubmit() {
    this.submitted = true;
    if (this.promotionForm.invalid) {
      return;
    }
    data: Promotion;
    this.formData.append('amount', this.promotionForm.value.amount);
    this.formData.append('end_date', this.promotionForm.value.end_date);
    this.formData.append('start_date', this.promotionForm.value.start_date);
    this.formData.append('product_id', this.selectedProducts);
    console.log(this.promotionForm.value);

    console.log(this.selectedProducts);

    this._ecommerceService.addpromotion(this.formData).subscribe((data: any) => {
      console.log(this.promotionForm.value.customFooterDPdata);

      // this.toastrSuccess();
      this.toastrProgressBar();



      console.log(data);
      //data.image = `http://localhost:8000${data.image}`
      // this.products.push(data)
      this.onAddPromtion.emit()
      this.success = true;
      this.modalService.dismissAll()


    }, (error: any) => {
      this.success = false
      console.log(error)
    })



  }
  toastrProgressBar() {
    this.toastr.success('Have fun storming the castle!', 'Progress Bar', {
      progressBar: true,
      toastClass: 'toast ngx-toastr',
      closeButton: true
    });
  }
  getProducts() {

     this._ecommerceService.getProducts().subscribe((result:any)=>{
       this.products = result;
       console.log('products',this.products)
     })
  }
 
  


  ngOnInit(): void {
    this.promotionForm = this.fb.group({
      amount: ['', Validators.required],
      end_date: ['', Validators.required],
      start_date: ['', [Validators.required]],
      product_id: [],


    })
    this.getProducts()
  }

}
