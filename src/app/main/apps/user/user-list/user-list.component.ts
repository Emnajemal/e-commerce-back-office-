import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CoreConfigService } from '@core/services/config.service';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';

import { UserListService } from 'app/main/apps/user/user-list/user-list.service';
import { User } from 'app/auth/models/user';


import { BeforeOpenEvent } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

import * as snippet from 'app/main/extensions/sweet-alerts/sweet-alerts.snippetcode';
import { StoreService } from 'Serv/store.service';
import Store from 'app/auth/models/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {
  public user: User ;
  public profile_photo: string;
  // Public
  public sidebarToggleRef = false;
  public rows;
  public selectedOption = 10;
  public ColumnMode = ColumnMode;
  public temp = [];
  public previousRoleFilter = '';
  public previousPlanFilter = '';
  public previousStatusFilter = '';
 userId: number;
 public users: User[];
public state=false;
id_pers:number=0;
  public selectRole: any = [
    { name: 'All', value: '' },
    { name: 'Admin', value: 'Admin' },
    { name: 'Author', value: 'Author' },
    { name: 'Editor', value: 'Editor' },
    { name: 'Maintainer', value: 'Maintainer' },
    { name: 'Subscriber', value: 'Subscriber' }
  ];

  public selectPlan: any = [
    { name: 'All', value: '' },
    { name: 'Basic', value: 'Basic' },
    { name: 'Company', value: 'Company' },
    { name: 'Enterprise', value: 'Enterprise' },
    { name: 'Team', value: 'Team' }
  ];

  public selectStatus: any = [
    { name: 'All', value: '' },
    { name: 'Pending', value: 'Pending' },
    { name: 'Active', value: 'Active' },
    { name: 'Inactive', value: 'Inactive' }
  ];

  public selectedRole = [];
  public selectedPlan = [];
  public selectedStatus = [];
  public searchValue = '';
  public stores: Store[];

  // Decorator
  @ViewChild(DatatableComponent) table: DatatableComponent;

  // Private
  private tempData = [];
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {UserListService} _userListService
   * @param {CoreSidebarService} _coreSidebarService
   */
  constructor(
    private _userListService: UserListService,
    private _coreSidebarService: CoreSidebarService,
    private _coreConfigService: CoreConfigService,
    private StoreServices:  StoreService,
    private modalService: NgbModal,
  ) {
    this._unsubscribeAll = new Subject();
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * filterUpdate
   *
   * @param event
   */
   getStores(){
    console.log('heyy')
    this.StoreServices.getDataTableRows().then((data: any) => {
      
      this.stores=data;
      console.log(data)
    })
  }
  filterUpdate(event) {
    // Reset ng-select on search
    this.selectedRole = this.selectRole[0];
    this.selectedPlan = this.selectPlan[0];
    this.selectedStatus = this.selectStatus[0];

    const val = event.target.value.toLowerCase();

    // Filter Our Data
    const temp = this.tempData.filter(function (d) {
      return d.fullName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // Update The Rows
    this.rows = temp;
    // Whenever The Filter Changes, Always Go Back To The First Page
    this.table.offset = 0;
  }

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
  }

  /**
   * Filter By Roles
   *
   * @param event
   */
  filterByRole(event) {
    const filter = event ? event.value : '';
    this.previousRoleFilter = filter;
    this.temp = this.filterRows(filter, this.previousPlanFilter, this.previousStatusFilter);
    this.rows = this.temp;
  }

  /**
   * Filter By Plan
   *
   * @param event
   */
  filterByPlan(event) {
    const filter = event ? event.value : '';
    this.previousPlanFilter = filter;
    this.temp = this.filterRows(this.previousRoleFilter, filter, this.previousStatusFilter);
    this.rows = this.temp;
  }

  /**
   * Filter By Status
   *
   * @param event
   */
  filterByStatus(event) {
    const filter = event ? event.value : '';
    this.previousStatusFilter = filter;
    this.temp = this.filterRows(this.previousRoleFilter, this.previousPlanFilter, filter);
    this.rows = this.temp;
  }

  /**
   * Filter Rows
   *
   * @param roleFilter
   * @param planFilter
   * @param statusFilter
   */
  filterRows(roleFilter, planFilter, statusFilter): any[] {
    // Reset search on select change
    this.searchValue = '';

    roleFilter = roleFilter.toLowerCase();
    planFilter = planFilter.toLowerCase();
    statusFilter = statusFilter.toLowerCase();

    return this.tempData.filter(row => {
      const isPartialNameMatch = row.role.toLowerCase().indexOf(roleFilter) !== -1 || !roleFilter;
      const isPartialGenderMatch = row.currentPlan.toLowerCase().indexOf(planFilter) !== -1 || !planFilter;
      const isPartialStatusMatch = row.status.toLowerCase().indexOf(statusFilter) !== -1 || !statusFilter;
      return isPartialNameMatch && isPartialGenderMatch && isPartialStatusMatch;
    });
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */



  // deleteData(personnel: any) {
  //   console.log(personnel);
  //   let conf = confirm("Are you sure you want to delete it?");
  //   if(conf)
  //   this._userListService.deletetData(personnel.id).subscribe(res => {
  //     console.log(res);
  //    let x = confirm("User deleted successfully");
  //     this._userListService.getDataTableRows();
  //   })
 
  // }

    //nlawj aala boutique bel id mteeio o nfaskhouu
  //   finduser(id): User {
  //     return this.users.find(user => user.id === id);
  //   }
  // deleteData(id) {
  //   let user = this.finduser(id)

  //   this._userListService.deletetData(id).subscribe(res => {
  //     let index = this.users.findIndex(user => user.id === id)
  //     this.users.splice(index, 1);
  //     console.log(res);

  //   })
  // }


  
 
  modalOpenDanger(modalDanger,row:any) {
    // console.log('hey'+row)
    this.modalService.open(modalDanger, {
      centered: true,
      windowClass: 'modal modal-danger'

    });
    this.id_pers=row.id;

}


deleteData(personnel:any) {
  
 
  if(this.id_pers !== 0) {
  console.log('ahla',personnel)
  this._userListService.deletetData(this.id_pers).subscribe((result: any) => {
    console.log('salem'+personnel.id)
    console.log('cc'+result)

    this._userListService.getDataTableRows();
    this.modalService.dismissAll()
    Swal.fire({
      title: "Deleted!",
      icon:"success",
    
      customClass: { confirmButton: 'btn btn-success' }
    });
  })
}}

  // ConfirmTextOpen() {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#7367F0',
  //     cancelButtonColor: '#E42728',
  //     confirmButtonText: 'Yes, delete it!',
  //     customClass: {
  //       confirmButton: 'btn btn-primary',
  //       cancelButton: 'btn btn-danger ml-1'
  //     }
  //   }).then(function (result) {
  //     if (result.value) {
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Deleted!',
  //         text: 'The user has been deleted.',
  //         customClass: {
  //           confirmButton: 'btn btn-success'
  //         }
  //       });
  //     }
  //   });
  // }


  //   this._userListService.deletetData(personnel.id).subscribe(res => {
  //     console.log(res);
  //    // let x = confirm("User deleted successfully");
  //     this._userListService.getDataTableRows();
  //   })}
  


  ngOnInit(): void {
  
    // Subscribe config change
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      //! If we have zoomIn route Transition then load datatable after 450ms(Transition will finish in 400ms)
      if (config.layout.animation === 'zoomIn') {
        setTimeout(() => {
          this._userListService.onUserListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.rows = response;
            this.tempData = this.rows;
          });
        }, 450);
      } else {
        this._userListService.onUserListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
          this.rows = response;
          this.tempData = this.rows;
        });
      }
    });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
