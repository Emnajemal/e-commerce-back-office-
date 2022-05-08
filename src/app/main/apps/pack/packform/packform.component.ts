import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Pack from 'app/auth/models/pack';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EcommerceService } from '../../ecommerce/ecommerce.service';
import { PackService } from '../pack.service';

@Component({
  selector: 'app-packform',
  templateUrl: './packform.component.html',
  styleUrls: ['./packform.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class PackformComponent implements OnInit {
  public pack: Pack[];
  packForm: FormGroup;
  submitted = false;
  image_pack: string;
  success: boolean;
  formData: FormData = new FormData()
  @Input() packId:number
  @Input() formType:string;
  @Output() onGetPack = new EventEmitter()
  public products: Observable<any[]>;
  public selectedProducts :any = []
 baseUrl:string = environment.apiUrl







  constructor(private fb: FormBuilder, private modalService: NgbModal, private _PackService: PackService, private _ecommerceService: EcommerceService) { }

  get f() { return this.packForm.controls; }

  uploadImage(event: any) {

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]

      this.packForm.get('image_pack').setValue(file);

      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.image_pack = event.target.result;
      };
      this.formData.append('image_pack', file)
      reader.readAsDataURL(file);
    }
  }
  submit() {
    if (this.formType=='add'){

    this.submitted = true;
    if (this.packForm.invalid) {
      return;
    }
    data: Pack;
    this.formData.append('name_pack', this.packForm.value.name_pack);
    this.formData.append('reference_pack', this.packForm.value.reference_pack);
    this.formData.append('price', this.packForm.value.price);
    this.formData.append('products_id', this.selectedProducts);
   // this.formData.append('status_pack', this.packForm.value.status_pack);
    this.formData.append('quantity_Pack', this.packForm.value.quantity_Pack);
    this.formData.append('image_pack', this.packForm.value.image_pack);
    this._PackService.pack(this.formData).subscribe((data: any) => {
      //data.image = `http://localhost:8000${data.image}`
      // this.products.push(data)
      this.onGetPack.emit()
      this.success = true;
      this.modalService.dismissAll()

    }, (error: any) => {
      this.success = false
      console.log(error)
    })
  }
     if (this.formType=='edit'){
       this.submitted = true;
     if (this.packForm.invalid) {
       console.log(this.packForm)
       return;
    }
       data: Pack;
       this.formData.append('name_pack', this.packForm.value.name_pack);
      console.log(this.packForm.value.name_pack);
      this.formData.append('reference_pack', this.packForm.value.reference_pack);
       this.formData.append('price', this.packForm.value.price);
       this.formData.append('products_id', this.selectedProducts);
      // this.formData.append('status_pack', this.packForm.value.status_pack);
       this.formData.append('quantity_Pack', this.packForm.value.quantity_Pack);
       this.formData.append('image_pack', this.packForm.value.image_pack);
       console.log(this.formData);
       this._PackService.packEdit(this.formData,this.packId).subscribe((data: any) => {
        //data.image = `http://localhost:8000${data.image}`
         // this.products.push(data)
        // this.onGetPack.emit()
         console.log(data)
         this.success = true;
         this.modalService.dismissAll()     
  
       }, (error: any) => {
         this.success = false
         console.log(error)
       })

     }
  }
  
  getProducts() {

    return this._ecommerceService.getProducts()
  }
  getPackById(id:number){
    this._PackService.getPackById(id).subscribe((result:any)=>{
      this.image_pack = this.baseUrl+result.image_pack
      this.packForm.patchValue(result)
      this.selectedProducts=result.products.map(item=>{
        return item.id;
      })
      console.log(this.selectedProducts)
    })

  }
  getPacks(){
    this._PackService.getPacks().subscribe((data: any) => {
      this.pack=data;
      
    })
  }


  modalOpenForm(modalForm) {
    this.submit();

    this.modalService.open(modalForm);
  }
  public multiCustomGithubUsersSelected = ['anjmao'];



  ngOnInit(): void {
   
    this.packForm = this.fb.group({
      name_pack: ['', Validators.required],
      reference_pack: ['', Validators.required],
      price: ['', Validators.required],
      quantity_Pack: ['', Validators.required],
      products_id: [],
      image_pack: [null, Validators.required],
      status_pack: [],
      pricesupplierp:[],
      gain_pack:[]

    })

    this.getPackById(this.packId)
    this.getPacks()
    this.products = this.getProducts()
  
   // this.products.forEach(console.log)
  
  }
}
