import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Product from 'app/auth/models/product';
import Store from 'app/auth/models/store';
import { knowledgeBaseService } from 'app/main/pages/kb/knowledge-base/knowledge-base.service';
import { EcommerceService } from '../ecommerce.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  addForm: FormGroup;
  image: string;
  success: boolean;
  formData:FormData  = new FormData()
  submitted = false;
  public stores: Store[];
 // public products: Product[];

  @Output() onAddProduct = new EventEmitter()

  constructor(private _ecommerceService: EcommerceService, private modalService: NgbModal, private fb: FormBuilder , private _knowledgeBaseService:knowledgeBaseService) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      reference: ['', Validators.required],
    //    status: ['', Validators.required],
      sellingprice: ['', Validators.required],
      pricesupplier: ['', Validators.required],
     // gain: ['', Validators.required],
      stores_id: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      image: [null, Validators.required],
    })
    this.getStores();
  }
  uploadImage(event: any) {

    if (event.target.files && event.target.files[0]) {
      const file =event.target.files[0]

      this.addForm.get('image').setValue(file);

      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.image = event.target.result;
      };
      this.formData.append('image',file)
      reader.readAsDataURL(file);
    }
  }
  modalOpenForm(modalForm) {
   this.addproductSubmit();

    this.modalService.open(modalForm);
  }
 
  getStores(){
    this._knowledgeBaseService.getDataTableRows().then((data: any) => {
      this.stores=data;
      console.log(data)
    })
  }
  get f() { return this.addForm.controls; }

  //add product 
  addproductSubmit() {
    console.log(this.addForm);
     this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    //let formdata = new FormData();
    data: Product;

   // if (this.addForm.value.image) {
    //  formdata.append('image', this.addForm.value.image);
    //  console.log(this.addForm.value.image);
   // }
    this.formData.append('name', this.addForm.value.name);
    console.log(this.addForm.value.name);
    //console.log(this.addForm);
    this.formData.append('reference', this.addForm.value.reference);
    this.formData.append('pricesupplier', this.addForm.value.pricesupplier);
    this.formData.append('sellingprice', this.addForm.value.sellingprice);
   // this.formData.append('gain', this.addForm.value.gain);
    this.formData.append('stores_id', this.addForm.value.stores_id);
    this.formData.append('quantity', this.addForm.value.quantity);
    //this.formData.append('status', this.addForm.value.status);
    this.formData.append('description', this.addForm.value.description);
    console.log(this.formData);
    this._ecommerceService.boutique(this.formData).subscribe((data: any) => {
       //data.image = `http://localhost:8000${data.image}`
      // this.products.push(data)
      this.onAddProduct.emit()
      console.log(data)
      this.success = true;
      this.modalService.dismissAll()

    },(error:any)=>{
      this.success = false
      console.log(error)
    }
    )
  }
 

}
