import { OrderService } from './order.service';
// import { Product } from 'app/auth/models/product';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Product from 'app/auth/models/store'

import Stepper from 'bs-stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  Order  from 'app/auth/models/order';
import { InvoiceListService } from 'app/main/apps/invoice/invoice-list/invoice-list.service';
import { StoreService } from 'Serv/store.service';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormWizardComponent implements OnInit {
  registerForm: FormGroup;
  public alert =false;
  public order: Order ;
  public alrt = false;
  public products: Product[];
  
  public basicDPdata: NgbDateStruct;

  
  // public
  public contentHeader: object;
  public TDNameVar;
  public TDEmailVar;
  public total;
  public Order;
  public TDFirstNameVar;
  public TDLastNameVar;
  public twitterVar;
  public facebookVar;
  public googleVar;
  public linkedinVar;
  public landmarkVar;
  public addressVar;
  public livreur;
  
submitted = false;
  public selectBasic = [
    { name: 'Paid' },
    { name: 'Unpaid' },
    // { name: 'Spain' },
    // { name: 'France' },
    // { name: 'Italy' },
    // { name: 'Australia' }
  ];

  public selectMulti = [{ name: 'Undelivered' }, { name: 'Delivered' }, { name: 'In delivering' }];
  public selectMultiSelected;


  // private
  private horizontalWizardStepper: Stepper;
  private verticalWizardStepper: Stepper;
  private modernWizardStepper: Stepper;
  private modernVerticalWizardStepper: Stepper;
  private bsStepper;
  

  
  public MinMaxDPdata: NgbDateStruct;

  
  public selectedProducts :any = []

  

  /**
   * Horizontal Wizard Stepper Next
   *
   * @param data
   */
  horizontalWizardStepperNext(data) {
    if (data.form.valid === true) {
      this.horizontalWizardStepper.next();
    }
  }
  /**
   * Horizontal Wizard Stepper Previous
   */
  horizontalWizardStepperPrevious() {
    this.horizontalWizardStepper.previous();
  }

  /**
   * Vertical Wizard Stepper Next
   */
  verticalWizardNext() {
    this.verticalWizardStepper.next();
  }
  /**
   * Vertical Wizard Stepper Previous
   */
  verticalWizardPrevious() {
    this.verticalWizardStepper.previous();
  }


  get f() { return this.registerForm.controls; }
  /**
   * Modern Horizontal Wizard Stepper Next
   */
  modernHorizontalNext() {
    this.modernWizardStepper.next();
  }
  /**
   * Modern Horizontal Wizard Stepper Previous
   */
  modernHorizontalPrevious() {
    this.modernWizardStepper.previous();
  }
  /**
   * Modern Vertical Wizard Stepper Next
   */
  modernVerticalNext() {
    this.modernVerticalWizardStepper.next();
  }
  /**
   * Modern Vertical Wizard Stepper Previous
   */
  modernVerticalPrevious() {
    this.modernVerticalWizardStepper.previous();
  }

  /**
   * On Submit
   */
  // onSubmit() {
  //   alert('Submitted!!');
  //   return false;
  // }
 
  
  // public
  public items = [{ itemId: '', itemName: '', itemQuantity: '', itemCost: '' }];

  public item = {
    itemName: '',
    itemQuantity: '',
    itemCost: ''
  };

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Add Item
   */
  addItem() {
    this.items.push({
      itemId: '',
      itemName: '',
      itemQuantity: '',
      itemCost: ''
    });
  }

  getproducts(){
    this.StoreServices.getProducts().then((data: any) => {
      this.products=data;
      console.log(data)
    })
  }
  
  onSubmit () {
    
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.alert=true;
      setTimeout(() => {
        this.alert = false;
       
      }, 2000) 
      return;
    }
    let formdata = new FormData();
    data: Order;
    
    formdata.append('client_name', this.registerForm.value.client_name);
   
   formdata.append('client_lastname',this.registerForm.value.client_lastname);
      formdata.append('num_tel',this.registerForm.value.num_tel);
      formdata.append('livreur',this.registerForm.value.livreur);
     formdata.append('colis_ref',this.registerForm.value.colis_ref);
     formdata.append('products_id',this.registerForm.value.products_id);
     formdata.append('quantity_order',this.registerForm.value.quantity_order);
   console.log(this.registerForm.value.livreur)
    

    console.log(this.registerForm.value.quantity_order);
  
      this.OrderService.register(formdata).subscribe({
      next: (data: any) => {
      
        console.log(data)
        // this.alert=true ; 
      
        this.alrt = true;
        setTimeout(() => {
          this.alrt = false;
        
        }, 4000) 
 
       this.StoreServices.getOrders();
      },
      
       
    } )
  }

  /**
   * DeleteItem
   *
   * @param id
   */
  deleteItem(id) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items.indexOf(this.items[i]) === id) {
        this.items.splice(i, 1);
        break;
      }
    }
  }


  

  constructor(private OrderService:OrderService, private StoreServices:  StoreService,private _formBuilder: FormBuilder,) {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On Init
   */
//    ngOnInit(): void {
   
//     this.registerForm = this._formBuilder.group({
      
//   insert_quantity: ['', Validators.required],
//   products_id: ['', Validators.required],
//   quantity: [''] ,
 
// }  );
// // this.getproducts();
// // this.getstocks();

// }
  ngOnInit() {

    this.registerForm = this._formBuilder.group({
      
      client_name: ['', Validators.required],
      client_lastname: ['', Validators.required],
      num_tel:  ['', Validators.required] ,
      livreur: ['', Validators.required],
      colis_ref: ['', Validators.required],
      products_id: ['', Validators.required],
      quantity_order: ['', Validators.required],
    });
  
    this.horizontalWizardStepper = new Stepper(document.querySelector('#stepper1'), {});

    this.verticalWizardStepper = new Stepper(document.querySelector('#stepper2'), {
      linear: false,
      animation: true
    });

    this.modernWizardStepper = new Stepper(document.querySelector('#stepper3'), {
      linear: false,
      animation: true
    });

    this.modernVerticalWizardStepper = new Stepper(document.querySelector('#stepper4'), {
      linear: false,
      animation: true
    });

    this.bsStepper = document.querySelectorAll('.bs-stepper');

    // content header
    this.contentHeader = {
      headerTitle: 'Form Wizard',
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
            name: 'Forms',
            isLink: true,
            link: '/'
          },
          {
            name: 'Form Wizard',
            isLink: false
          }
        ]
      }
    };
  }
}
