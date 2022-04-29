import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Product from 'app/auth/models/product';
import Store from 'app/auth/models/store';
import { knowledgeBaseService } from 'app/main/pages/kb/knowledge-base/knowledge-base.service';
import { environment } from 'environments/environment';
import { EcommerceService } from '../ecommerce.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
  editForm: FormGroup;
  image: string;
  baseUrl:string = environment.apiUrl
  public stores: Store[];
  formData:FormData  = new FormData()
  constructor(private _ecommerceService: EcommerceService, private modalService: NgbModal, private fb: FormBuilder,private _knowledgeBaseService:knowledgeBaseService) { }
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
      stores_id:[null],
      quantity:[null],
      image: [null]
    })
    console.log(this.productId)
    //getproductbyid heya eli tkhadem function eli louta besh tabaa3 l inputs fehom
    this.getProductById(this.productId)
    this.getStores()
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


    this.formData.append('name', this.editForm.value.name);
    this.formData.append('reference', this.editForm.value.reference);
    this.formData.append('pricesupplier', this.editForm.value.pricesupplier);
    this.formData.append('sellingprice', this.editForm.value.sellingprice);
    this.formData.append('quantity', this.editForm.value.quantity);
    this.formData.append('description', this.editForm.value.description);
    this.formData.append('stores_id', this.editForm.value.stores_id);
    this.formData.append('image', this.editForm.value.image);


    this._ecommerceService.productEdit(this.formData,this.productId).subscribe((data: any) => {

      //oneditproduct kif l event kidhabet lezem nenzel aaleha besh tekhdem hadheka aaleh ena lezem naamel emit iibara nzel aaleha 
      this.onEditProduct.emit()
      console.log(data)
      this.modalService.dismissAll()


    },(error:any)=>{
      console.log(error)
    }
    )
  }

  //heya eli tjibli l product mel base bel id o thothom fel inputs
  getProductById(id:number){
    this._ecommerceService.getProductById(id).subscribe((result:any)=>{
      console.log(result)
      this.image = this.baseUrl+result.image
      this.editForm.patchValue(result)
    })

  }
  getStores(){
    this._knowledgeBaseService.getDataTableRows().then((data: any) => {
      this.stores=data;
      console.log('stores',data)
    })
  }


}
