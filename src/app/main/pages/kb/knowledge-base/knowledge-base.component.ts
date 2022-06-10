import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { knowledgeBaseService } from 'app/main/pages/kb/knowledge-base/knowledge-base.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Store from 'app/auth/models/store';
import store from 'app/auth/models/store';
import { id } from '@swimlane/ngx-datatable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KnowledgeBaseComponent implements OnInit, OnDestroy {
  // public
  public contentHeader: object;
  public searchText: any;
  public data: any;
  addForm: FormGroup;
  editForm: FormGroup;
  public submitted = false;
  public store_image: string;
  public stores: Store[];
  public storeDetails: Store;
  public update = 0;
  public done = false;
  //= [{
  //id:1,
  //name:'my store',
  //profile_photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png'
  //}];




  // private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {knowledgeBaseService} _knowledgeBaseService
   */
  constructor(private _knowledgeBaseService: knowledgeBaseService,
    private fb: FormBuilder,
    private modalService: NgbModal) {
    this._unsubscribeAll = new Subject();
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  addshopSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    let formdata = new FormData();
    data: store;

    if (this.addForm.value.store_image) {
      formdata.append('store_image', this.addForm.value.store_image);
      console.log(this.addForm.value.store_image);
    }
    formdata.append('name', this.addForm.value.name);
    console.log(this.addForm.value.name);
    this._knowledgeBaseService.boutique(formdata).subscribe({
      next: (data: any) => {
        Swal.fire({
          title: "Shop Added Succefully!",
          icon:"success",
         // imageUrl: result.value.avatar_url,
          customClass: { confirmButton: 'btn btn-success' }
        });
        this.modalService.dismissAll()
        data.store_image = `http://localhost:8000${data.store_image}`
        this.stores.push(data)
        console.log(data)
        this.done = true;
        setTimeout(() => {
          this.done = false;
        }, 2000)
        this.clearForm();
      }
    })
  }
  get f() { return this.addForm.controls; }

  editShopSubmit() {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }
    let formdata = new FormData();
    data: store;

    if (this.editForm.value.store_image) {
      formdata.append('store_image', this.editForm.value.store_image);
      console.log(this.editForm.value.store_image);
    }
    formdata.append('name', this.editForm.value.name);
    console.log(this.editForm.value.name);

    this._knowledgeBaseService.updateshop(this.update, formdata).subscribe({
      next: (data: any) => {
        Swal.fire({
          title: " Shop Updated Succefully!",
          icon:"success",
         // imageUrl: result.value.avatar_url,
          customClass: { confirmButton: 'btn btn-success' }
        });
        console.log(data);
        let store = this.stores.find(store => store?.id == this.update);
        store.name = data.name;
        store.store_image = `http://localhost:8000${data.store_image}`
        //TO-DO  update  user localStorage 
        this.clearForm();
        this.done = true;
        setTimeout(() => {
          this.done = false;
        }, 2000)
      }

    })
    console.log(this.update);
  }

  /**
   *   function abc (a,b) {}
   *   let fn = (a,b) => {}
   */

  getboutique() {
    this._knowledgeBaseService.getDataTableRows().then((data: any) => {
      this.stores = data.map(store => {
        return { ...store, store_image: `http://localhost:8000${store.store_image}` }
      });
      console.log(data)
    })

  }
  //nlawj aala boutique bel id mteeio o nfaskhouu
  findStore(id): Store {
    return this.stores.find(store => store?.id === id);
  }
  deleteshopSubmit(id) {
    let store = this.findStore(id)

    this._knowledgeBaseService.deletetData(id).subscribe(res => {
      Swal.fire({
        title: "Deleted!",
        icon:"success",
       // imageUrl: result.value.avatar_url,
        customClass: { confirmButton: 'btn btn-success' }
      });
      let index = this.stores.findIndex(store => store?.id === id)
      this.stores.splice(index, 1);
      console.log(res);

    })
  }
  //njib les valeur mel back o nhothom besh nbadelhom
  editshopSubmit(data) {

    this.update = data?.id;
     this.store_image = data?.store_image;
   // let formdata = new FormData();
    console.log(this.update + " / ")
    this.editForm?.patchValue(this.stores.find(a => a?.id == data?.id));

  }
  clearForm() {
    this.addForm.get("name").setValue('');
    this.addForm.get("store_image").setValue('');
    this.editForm.get("name").setValue('');
    this.editForm.get("store_image").setValue('');
    this.update = 0;
    this.store_image = '';
  }







  //return response()->json($store,200)  this.stores.push(data) })

  /** delete store 
   *  let index = this.stores.findIndex(store => store?.id === id)
   *  if(index >=0) this.stores.splice(index,1)
   */

  /**
   * let store = this.stores.find(store => store?.id === id)
   * if(store)    this.store.name = name 
   */


  uploadImage(event: any) {

    if (event.target.files && event.target.files[0]) {
      //debugger;

      this.addForm.get('store_image').setValue(event.target.files[0]);

      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.store_image = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  editImage(event: any) {

    if (event.target.files && event.target.files[0]) {

      this.editForm.get('store_image').setValue(event.target.files[0]);

      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.store_image = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  /**
   * On Changes
   */
  ngOnInit(): void {
    this._knowledgeBaseService.onKBChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.data = response;
    });


    this.addForm = this.fb.group({
      name: ['', Validators.required],
      store_image: [null,Validators.required],
    })
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      store_image: [null],
    })



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
            name: 'Pages',
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
    this.getboutique();
  }
  onCancel() {
    this.clearForm();
  }
  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
  modalOpenForm(modalForm, store?:any) {
    this.editshopSubmit(store);
    this.modalService.open(modalForm);
  }
  modalOpen(modalForm, store) {
    this.storeDetails = store;
    this.modalService.open(modalForm);
  }

}


