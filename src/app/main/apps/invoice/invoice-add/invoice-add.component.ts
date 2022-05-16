import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { repeaterAnimation } from 'app/main/forms/form-repeater/form-repeater.animation';
import { InvoiceAddService } from 'app/main/apps/invoice/invoice-add/invoice-add.service';


import Stepper from 'bs-stepper';

@Component({
  selector: 'app-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.scss'],
  animations: [repeaterAnimation],
  encapsulation: ViewEncapsulation.None
})
// export class InvoiceAddComponent implements OnInit, OnDestroy {
  export class InvoiceAddComponent implements OnInit {
    // public
    public contentHeader: object;
    public TDNameVar;
    public TDEmailVar;
    public TDFirstNameVar;
    public TDLastNameVar;
    public twitterVar;
    public facebookVar;
    public googleVar;
    public linkedinVar;
    public landmarkVar;
    public addressVar;
  
    public selectBasic = [
      { name: 'UK' },
      { name: 'USA' },
      { name: 'Spain' },
      { name: 'France' },
      { name: 'Italy' },
      { name: 'Australia' }
    ];
  
    public selectMulti = [{ name: 'English' }, { name: 'French' }, { name: 'Spanish' }];
    public selectMultiSelected;
  
    // private
    private horizontalWizardStepper: Stepper;
    private verticalWizardStepper: Stepper;
    private modernWizardStepper: Stepper;
    private modernVerticalWizardStepper: Stepper;
    private bsStepper;
  
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
    onSubmit() {
      alert('Submitted!!');
      return false;
    }
  
  // // public
  // public apiData;
  // public sidebarToggleRef = false;
  // public invoiceSelect;
  // public invoiceSelected;

  // public paymentDetails = {
  //   totalDue: '$12,110.55',
  //   bankName: 'American Bank',
  //   country: 'United States',
  //   iban: 'ETD95476213874685',
  //   swiftCode: 'BR91905'
  // };

  // public items = [{ itemId: '', itemName: '', itemQuantity: '', itemCost: '' }];

  // public item = {
  //   itemName: '',
  //   itemQuantity: '',
  //   itemCost: ''
  // };

  // // ng2-flatpickr options
  // public dateOptions = {
  //   altInput: true,
  //   mode: 'single',
  //   altInputClass: 'form-control flat-picker flatpickr-input invoice-edit-input',
  //   defaultDate: ['2020-05-01'],
  //   altFormat: 'Y-n-j'
  // };
  // public dueDateOptions = {
  //   altInput: true,
  //   mode: 'single',
  //   altInputClass: 'form-control flat-picker flatpickr-input invoice-edit-input',
  //   defaultDate: ['2020-05-17'],
  //   altFormat: 'Y-n-j'
  // };

  // // Private
  // private _unsubscribeAll: Subject<any>;

  // /**
  //  * Constructor
  //  *
  //  * @param {InvoiceAddService} _invoiceAddService
  //  * @param {CoreSidebarService} _coreSidebarService
  //  */
  constructor(private _invoiceAddService: InvoiceAddService, private _coreSidebarService: CoreSidebarService) {
    // this._unsubscribeAll = new Subject();
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Add Item
   */
  // addItem() {
  //   this.items.push({
  //     itemId: '',
  //     itemName: '',
  //     itemQuantity: '',
  //     itemCost: ''
  //   });
  // }

  // /**
  //  * DeleteItem
  //  *
  //  * @param id
  //  */
  // deleteItem(id) {
  //   for (let i = 0; i < this.items.length; i++) {
  //     if (this.items.indexOf(this.items[i]) === id) {
  //       this.items.splice(i, 1);
  //       break;
  //     }
  //   }
  // }

  // /**
  //  * Toggle Sidebar
  //  *
  //  * @param name
  //  */
  // toggleSidebar(name) {
  //   this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  // }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {
    // this._invoiceAddService.onInvoicAddChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
    //   let responseData = response;
    //   this.apiData = responseData.slice(5, 10);
    // });
    // this.invoiceSelect = this.apiData;
    // this.invoiceSelected = this.invoiceSelect;




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
  }

  /**
   * On destroy
   */
  // ngOnDestroy(): void {
  //   // Unsubscribe from all subscriptions
  //   this._unsubscribeAll.next();
  //   this._unsubscribeAll.complete();
  // }








}
