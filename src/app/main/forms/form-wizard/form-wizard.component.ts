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
import { Router } from '@angular/router';

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

  quantité=[];
  command  = [];
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

  constructor(
    private OrderService:OrderService,
    private StoreServices:  StoreService,
    private _formBuilder: FormBuilder,
    private router:Router,
  ) {}
  

  /**
   * Horizontal Wizard Stepper Next
   *
   * @param data
   */
  horizontalWizardStepperNext() {
    // if (data.form.valid === true) {
    //   this.horizontalWizardStepper.next();
    // }
   
      this.horizontalWizardStepper.next();
    
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
  public items = [{  itemName: '', itemQuantity: '' }];

  public item = {
    itemName: '',
    itemQuantity: '',
  
  };

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Add Item
   */
  addItem() {
    this.items.push({
     
      itemName:'',
      itemQuantity:'' ,
     
    });
    this.command.push({
     
      products_id:this.registerForm.value.products_id,
      quantity_order:this.registerForm.value.quantity_order ,
     
    });
// console.log(this.registerForm.value);
//     console.log(this.item);
//     alert(this.item);
  }

  getproducts(){
    this.StoreServices.getProducts().then((data: any) => {
      this.products=data;
      console.log(data);
    })
  }
  
  onSubmit () {
    console.log(this.registerForm);
    this.registerForm.markAllAsTouched();
    if(this.registerForm.invalid) return;

    this.submitted = true;

    this.command.push({
      products_id:this.registerForm.value.products_id,
      quantity_order:this.registerForm.value.quantity_order ,
    });
    // alert('ok');
    
    let value = {...this.registerForm.value};

    console.log(this.command);
    value.commande = this.command;
    value.products_id= '';
    value.quantity_order= '';
    value.delivery_date=this.registerForm.value.delivery_date.year+'/'+this.registerForm.value.delivery_date.month+'/'+this.registerForm.value.delivery_date.day;
console.log(this.registerForm.value);

    
   console.log(this.registerForm.value.livreur)
    

    console.log(this.registerForm.value.quantity_order);
  
      this.OrderService.register(value).subscribe( () => {
        console.log(value)
        this.router.navigate(['/apps/invoice/list'])
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
      
      client_name: ['',[]],
      client_lastname: ['', []],
      num_tel:  ['', []] ,
      num_tel2:  ['', []],
      livreur: ['', []],
      colis_ref: ['', []],
      products_id: ['',[]],
      quantity_order: ['',[]],
      delivery_date: ['', []],   
      status_livraison: ['', []],  
      status_paiment: ['', []],  
      gouvernerat: ['', []],  
      commande:[, []],
    });
  this.getproducts();
  
    // this.horizontalWizardStepper = new Stepper(document.querySelector('#stepper1'), {});

    // this.verticalWizardStepper = new Stepper(document.querySelector('#stepper2'), {
    //   linear: false,
    //   animation: true
    // });

    // this.modernWizardStepper = new Stepper(document.querySelector('#stepper3'), {
    //   linear: false,
    //   animation: true
    // });

    // this.modernVerticalWizardStepper = new Stepper(document.querySelector('#stepper4'), {
    //   linear: false,
    //   animation: true
    // });

    // this.bsStepper = document.querySelectorAll('.bs-stepper');

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
    this.bsStepper = document.querySelector('div.bs-stepper');
    console.log(this.bsStepper)
    this.horizontalWizardStepper = new Stepper(document.querySelector('div.bs-stepper'), {});
    console.log(this.bsStepper)
  }

  ngAfterViewInit(){
   
    // this.verticalWizardStepper = new Stepper(document.querySelector('div.stepper2'), {
    //   linear: false,
    //   animation: true
    // });
    // console.log(this.bsStepper)
    // this.modernWizardStepper = new Stepper(document.querySelector('#stepper3'), {
    //   linear: false,
    //   animation: true
    // });
    // console.log(this.bsStepper)
    // this.modernVerticalWizardStepper = new Stepper(document.querySelector('#stepper4'), {
    //   linear: false,
    //   animation: true
    // });
    // console.log(this.bsStepper)

  }


  productChaned(product_id) {
    console.log(product_id);
    console.log(this.products);
    console.log(this.products.filter(p => p.id == product_id)[0]);
    this.registerForm.controls.quantity_order.setValidators([
      
      //njib l produit bel id mteeio o njib l quantité mteeio o nhotha heya l max o l + trajaahouli number
      // +"55"  => 55

      Validators.max(+this.products.filter(p => p.id == product_id)[0]['quantity']),
      Validators.min(1)
    ]);
    this.registerForm.controls.quantity_order.updateValueAndValidity();
    console.log(this.registerForm);

  }
}
