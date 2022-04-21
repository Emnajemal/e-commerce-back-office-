import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Product from 'app/auth/models/product';
import { EcommerceService } from '../ecommerce.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
  editForm: FormGroup;
  image: string;
  formData:FormData  = new FormData()
  constructor(private _ecommerceService: EcommerceService, private modalService: NgbModal, private fb: FormBuilder) { }
  @Output() onEditProduct = new EventEmitter()
  @Input() productId:number

  ngOnInit(): void {
    this.editForm = this.fb.group({
      name: [null],
      reference: [null],
      status: [null],
      pricesupplier:[null],
      sellingprice: [null],
      gain:[null],
      description:[null],
      image: [null]
    })
    console.log(this.productId)
    //getproductbyid heya eli tkhadem function eli louta besh tabaa3 l inputs fehom
    this.getProductById(this.productId)
  }
 

  uploadImage(event: any) {

    if (event.target.files && event.target.files[0]) {
      const file =event.target.files[0]

      this.editForm.get('image').setValue(file);

      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.image = event.target.result;
      };
      this.formData.append('image',file)
      reader.readAsDataURL(file);
    }
  }
  editproductSubmit() {
   console.log(this.editForm.value.name) 
    // this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }
    //let formdata = new FormData();
    data: Product;

   // if (this.addForm.value.image) {
    //  formdata.append('image', this.addForm.value.image);
    //  console.log(this.addForm.value.image);
   // }
    this.formData.append('name', this.editForm.value.name);
    console.log(this.editForm.value.name);
    this.formData.append('reference', this.editForm.value.reference);
    this.formData.append('pricesupplier', this.editForm.value.pricesupplier);
    this.formData.append('sellingprice', this.editForm.value.sellingprice);
    this.formData.append('gain', this.editForm.value.gain);
    this.formData.append('status', this.editForm.value.status);
    this.formData.append('description', this.editForm.value.description);
    this._ecommerceService.productEdit(this.formData,this.productId).subscribe((data: any) => {
       //data.image = `http://localhost:8000${data.image}`
      // this.products.push(data)
      //oneditproduct kif l event kidhabet lezem nenzel aaleha besh tekhdem hadheka aaleh ena lezem naamel emit iibara nzel aaleha 
      this.onEditProduct.emit()
      console.log(data)

    },(error:any)=>{
      console.log(error)
    }
    )
  }
  
  // ngOnChanges(changes:SimpleChange){
  //   console.log('Edit Component',changes['productId'].currentValue)
  //   this.getProductById(changes['productId'].currentValue)
  // }
  //heya eli tjibli l product mel base bel id o thothom fel inputs
  getProductById(id:number){
    this._ecommerceService.getProductById(id).subscribe((result:any)=>{
      console.log(result)
      this.editForm.patchValue(result)
    })

  }
  


}
