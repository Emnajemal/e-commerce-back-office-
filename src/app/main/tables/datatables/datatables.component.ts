import { DataService } from './../../forms/form-elements/select/data.service';
// import { Product } from 'app/auth/models/product';
import { Component, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

import { CoreTranslationService } from '@core/services/translation.service';

import { locale as german } from 'app/main/tables/datatables/i18n/de';
import { locale as english } from 'app/main/tables/datatables/i18n/en';
import { locale as french } from 'app/main/tables/datatables/i18n/fr';
import { locale as portuguese } from 'app/main/tables/datatables/i18n/pt';

import * as snippet from 'app/main/tables/datatables/datatables.snippetcode';

import { DatatablesService } from 'app/main/tables/datatables/datatables.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Stock from 'app/auth/models/stock';
import Product from 'app/auth/models/product';
import {EcommerceService} from 'app/main/apps/ecommerce/ecommerce.service';
import { StoreService } from 'Serv/store.service';
@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html',
  styleUrls: ['./datatables.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatatablesComponent implements OnInit {
  // Private
  private _unsubscribeAll: Subject<any>;
  private tempData = [];

  // public
  public contentHeader: object;
  public rows: any;
  public selected = [];
  public kitchenSinkRows: any;
  public basicSelectedOption: number = 10;
  public ColumnMode = ColumnMode;
  public expanded = {};
  public editingName = {};
  public editingStatus = {};
  public editingAge = {};
  public editingSalary = {};
  public chkBoxSelected = [];
  public SelectionType = SelectionType;
  public exportCSVData;
  public stockForm: FormGroup;
  formData:FormData  = new FormData();
  public submitted = false;
  alert:boolean=null;
  public x :number ;
  public products: Product[];
//  stock=new Stock;
 public stockDetails: any;
 public stocks: Stock[];

  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;

  // snippet code variables
  public _snippetCodeKitchenSink = snippet.snippetCodeKitchenSink;
  public _snippetCodeInlineEditing = snippet.snippetCodeInlineEditing;
  public _snippetCodeRowDetails = snippet.snippetCodeRowDetails;
  public _snippetCodeCustomCheckbox = snippet.snippetCodeCustomCheckbox;
  public _snippetCodeResponsive = snippet.snippetCodeResponsive;
  public _snippetCodeMultilangual = snippet.snippetCodeMultilangual;
  

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Inline editing Name
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateName(event, cell, rowIndex) {
    this.editingName[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Inline editing Age
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateAge(event, cell, rowIndex) {
    this.editingAge[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Inline editing Salary
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
   transformDate(date){
 return new Date(date).toLocaleString()
  }
  inlineEditingUpdateSalary(event, cell, rowIndex) {
    this.editingSalary[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Inline editing Status
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateStatus(event, cell, rowIndex) {
    this.editingStatus[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Search (filter)
   *
   * @param event
   */
  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.kitchenSinkRows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  /**
   * Row Details Toggle
   *
   * @param row
   */
  rowDetailsToggleExpand(row) {
    this.tableRowDetails.rowDetail.toggleExpandRow(row);
  }

  /**
   * For ref only, log selected values
   *
   * @param selected
   */
  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

 

  /**
   * For ref only, log activate events
   *
   * @param selected
   */
  onActivate(event) {
    // console.log('Activate Event', event);
  }

  /**
   * Custom Chkbox On Select
   *
   * @param { selected }
   */
  customChkboxOnSelect({ selected }) {
    this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
    this.chkBoxSelected.push(...selected);
  }

  /**
   * Constructor
   *
   * @param {DatatablesService} _datatablesService
   * @param {CoreTranslationService} _coreTranslationService
   */
  // @Output() onAddstock = new EventEmitter()
  constructor(private _datatablesService: DatatablesService, private _coreTranslationService: CoreTranslationService,private modalService: NgbModal,private _formBuilder: FormBuilder, private EcommerceService:EcommerceService
  , private StoreServices :StoreService) {
    this._unsubscribeAll = new Subject();
    this._coreTranslationService.translate(english, french, german, portuguese);
  }
   // modal Open Form
  modalOpenForm(modalForm) {
    
    this.modalService.open(modalForm);
    // this.submit();
  }


  modalOpen(modalBasic, stock) {

    this.stockDetails =  {
      insertedProduct: this.stocks.filter(x => stock.id == x['products'][0].id),
      stock
    };
    console.log( this.stockDetails);
    this.modalService.open(modalBasic);
  }
 

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
 
  getproducts(){
    this.StoreServices.getProducts().then((data: any) => {
      this.products=data;
      console.log(data)
    })
  }

  getstocks(){
    this._datatablesService.getDataTableRows().then((data: any) => {
      this.stocks=data;
      console.log('nour')
      console.log(data)
    })

  } 

  submit() {
    this.submitted = true;
    // if (this.stockForm.invalid) {
    //   return;

    // }
    let formdata = new FormData();
    data: Stock;
    console.log(this.stockForm)
      formdata.append('products_id',this.stockForm.value.products_id);
      formdata.append('insert_quantity',this.stockForm.value.insert_quantity);
    
      formdata.append('quantity',this.stockForm.value.quantity);
      formdata.append('insert_date', this.stockForm.value.insert_date);
      // try{
      // }catch(i){
      //   console.log(i)
      // }
      console.log(this.stockForm.value.insert_date);
      this._datatablesService.addstock(formdata).subscribe((data: any) => {
        console.log(data);
       console.log("hey");
       this.alert=true;
       this.modalService.dismissAll()
    
      // this.onAddstock.emit()
       console.log(data) ;
       setTimeout(() => {
        this.alert= null;
     
 
      }, 1000)
     
      this.clearForm();
     
     this.getproducts();
     this.getstocks();

     },(error:any)=>{
       this.alert=false;
       console.log(error)
     }
     
     )

  }
   

  clearForm() {
    this.stockForm.get("insert_quantity").setValue('');
    this.stockForm.get("products_id").setValue('');
    this.stockForm.get("insert_date").setValue('');
    
  }



  ngOnInit(): void {
   
        this.stockForm = this._formBuilder.group({
          
      insert_quantity: ['', Validators.required],
      products_id: ['', Validators.required],
      insert_date: ['', [Validators.required]],
      quantity: [''] ,
     
    }  );
  this.getproducts();
  this.getstocks();
  }
  // insertData(){
  //   //console.log('bonjour-insertion-test');
  //   //console.log(this.product);
  //   this._datatablesService.addstock(this.stock).subscribe(res =>{
  //     //console.log(res);
  //     this.getproducts();
    
  //   })

  // }
  // ngOnInit() {
  //   this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
  //     this.rows = response;
  //     this.tempData = this.rows;
  //     this.kitchenSinkRows = this.rows;
  //     this.exportCSVData = this.rows;
      
  //   });

  //   this.stockForm = this._formBuilder.group({
  //     insert_quantity: ['', Validators.required],
  //     products_id: ['', Validators.required],
  //     quantity: [''],
     
    
  //   })
    
  //   this.getproducts();
     

  //   // content header
  //   this.contentHeader = {
  //     headerTitle: 'Datatables',
  //     actionButton: true,
  //     breadcrumb: {
  //       type: '',
  //       links: [
  //         {
  //           name: 'Home',
  //           isLink: true,
  //           link: '/'
  //         },
  //         {
  //           name: 'Forms & Tables',
  //           isLink: true,
  //           link: '/'
  //         },
  //         {
  //           name: 'Datatables',
  //           isLink: false
  //         }
  //       ]
  //     }
  //   };
  // }
}
